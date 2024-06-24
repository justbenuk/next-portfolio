import { redirect } from "next/navigation";
import { getUser } from "@/actions/auth";
import LogoutForm from "@/forms/logout-form";
import ChangeDetailsForm from "@/forms/change-deails-form";
export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    return redirect("auth/login");
  }
  return (
    <div className="max-w-7xl mx-auto px-6 xl:px-0 mt-4">
      <div className="rounded-xl shadow-xl bg-white">
        <div className="flex flex-row justify-between items-center py-4 px-6">
          <h1 className="text-sm font-bold">Welcome Back <span className="font-bold text-yellow-500">{user.firstname}</span></h1>
          <div>
            <LogoutForm />
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-xl py-4 px-6">
        <h1 className="text-sm font-bold">Personel Details</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1">
            <p className=" text-center text-sm mt-4">For Security reasons, I <span>do Not</span> allow the changinf of Email Address. If you require a change of email. Plkease contact support</p>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ChangeDetailsForm user={user}/>
          </div>
        </div>
      </div>
    </div>
  );
}
