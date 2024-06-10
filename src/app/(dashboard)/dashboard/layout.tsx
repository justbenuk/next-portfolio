import type { Metadata } from "next";
import "../../globals.css";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Dashboard",
};

type RootChildren = {
  children: ReactNode
}

export default function RootLayout({ children }: RootChildren) {
  return (
    <>
      <div>sidebar</div>
    {children}
    </>
  );
}
