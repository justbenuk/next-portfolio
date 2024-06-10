import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import Provider from "@/lib/provider";

export const metadata: Metadata = {
  title: "Just Ben UK | Freelance Developer",
  description: "I build fullstack applications with NextJS",
};

type RootChildren = {
  children: ReactNode
}

export default function RootLayout({ children }: RootChildren) {
  return (
    <html lang="en" className="min-h-screen">
      <body>
        <Provider>
        <div className='flex flex-col items-center justify-between min-h-screen'>
        <Navigation />
        <main className="px-6 lg:px-0">{children}</main>
        <Footer />
        </div>
        </Provider>
      </body>
    </html>
  );
}
