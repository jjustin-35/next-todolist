import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Registry from "@/libs/styledComponentRegistry";
import Provider from "@/libs/reduxProvider";
import { GlobalStyle } from "./_globalStyle";
import { languages } from "@/constants/languages";
import { initI18next } from "@/libs/i18n/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "todolist",
  description: "todolist demo",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  await initI18next(lang);

  return (
    <html lang={lang}>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Registry>
          <GlobalStyle />
          <Provider>
            {children}
          </Provider>
        </Registry>
      </body>
    </html>
  );
}
