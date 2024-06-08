import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Just Ben UK | Freelance Developer",
  description: "I build fullstack applications with NextJS",
};

type RootChildren = {
  children: ReactNode
}

export default function RootLayout({children}: RootChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
