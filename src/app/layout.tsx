import { Exo_2, Vampiro_One } from "next/font/google";

import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/libs/styled-components";
import ThemeProvider from "@/providers/theme";

import "@/app/globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} ${vampiro.variable}`}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
