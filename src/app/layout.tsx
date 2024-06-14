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
  children: ReactNode;
};

export default function RootLayout({ children }: RootChildren) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Provider>
          <div className="min-h-screen flex flex-col justify-between">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
