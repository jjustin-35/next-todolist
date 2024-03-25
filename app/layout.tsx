import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Registry from "@/libs/styledComponentRegistry";
import Provider from "@/libs/reduxProvider";
import { GlobalStyle } from "./_globalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "todolist",
  description: "todolist demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Registry>
          <GlobalStyle />
          <Provider>{children}</Provider>
        </Registry>
      </body>
    </html>
  );
}
