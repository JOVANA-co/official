import { Exo_2, Vampiro_One } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { routing } from "@/i18n/routing";
import StyledComponentsRegistry from "@/libs/styled-components";
import ThemeProvider from "@/providers/theme";

import "@/app/[locale]/globals.css";

const exo2 = Exo_2({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--exo-2",
  subsets: ["latin"],
});

const vampiro = Vampiro_One({
  weight: ["400"],
  variable: "--vampiro-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JOVANA",
  description: "The application built in Next for JOVANA officials",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${exo2.variable} ${vampiro.variable}`}>
        <NextIntlClientProvider>
          <StyledComponentsRegistry>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
