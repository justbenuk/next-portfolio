import { RootLayoutProps } from "@/types";
import "../globals.css";
import Navigation from "@/components/navigation/navigation";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-800 min-h-screen">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
