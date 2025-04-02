import { Contrail_One } from "next/font/google";

import type { Metadata } from "next";

import Background from "@/components/Background";
import StyledComponentsRegistry from "@/libs/styled-components";
import ThemeProvider from "@/providers/theme";

import "@/app/globals.css";

const font = Contrail_One({
  weight: "400",
  variable: "--contrail-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JOVANA",
  description: "The application built in Next for JOVANA officials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Background />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
