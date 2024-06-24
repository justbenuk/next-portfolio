import VerifyAuth from "@/components/verifyauth/verifyauth";
import { RootLayoutProps } from "@/types";
import "../../globals.css";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="antialiased bg-gray-100">
      <body>
        <VerifyAuth>{children}</VerifyAuth>
      </body>
    </html>
  );
}
