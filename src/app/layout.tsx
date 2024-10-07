import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeContextProvider from "./context/HomeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Player - João Gabriel Dantas",
  description: "Music player, aluno: João Gabriel Dantas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HomeContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </HomeContextProvider>
  );
}
