import { ReactNode } from "react";
import { verifyAuth } from "@/lib/db/auth";
import { redirect } from "next/navigation";
type AuthProps = {
  children: ReactNode;
};
export default async function VerifyAuth({ children }: AuthProps) {
  //check if user is authenticated
  const isAuth = await verifyAuth();

  //if not authenticated
  if (!isAuth.user) {
    return redirect("/login");
  }

  return <>{children}</>;
}
