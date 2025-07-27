import fs from "fs";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import _ from "lodash";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define credentials interface
interface GoogleCredentials {
  client_email: string;
  private_key: string;
  [key: string]: unknown;
}

// 讀取 service account 金鑰
const base64 = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
const creds: GoogleCredentials = JSON.parse(
  Buffer.from(base64!, "base64").toString("utf-8")
);

const SHEET_ID: string = process.env.GOOGLE_SHEET_ID!;
const TARGET_LOCALES = ["zh-TW", "en"];

async function run() {
  const auth = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const doc = new GoogleSpreadsheet(SHEET_ID, auth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const result: Record<string, Record<string, string>> = {};
  TARGET_LOCALES.forEach((locale) => (result[locale] = {}));

  for (const row of rows) {
    const key = row.get("key") as string;
    for (const locale of TARGET_LOCALES) {
      _.set(result[locale], key, row.get(locale) as string);
    }
  }

  for (const locale of TARGET_LOCALES) {
    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "locales",
      `${locale}.json`
    );
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(result[locale], null, 2));
  }

  console.log("✅ Translations written to locales/");
}

run();
