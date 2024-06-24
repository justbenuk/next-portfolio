import { redirect } from "next/navigation";
import { getUser } from "@/actions/auth";
import LogoutForm from "@/forms/logout-form";
import ChangeDetailsForm from "@/forms/change-deails-form";
import ChangePasswordForm from "@/forms/change-password-form";
import Link from "next/link";
export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    return redirect("auth/login");
  }
  return (
    <div className="max-w-7xl mx-auto px-6 xl:px-0 mt-4">
      <div className="rounded-xl shadow-xl bg-white mb-4">
        <div className="flex flex-row justify-between items-center py-4 px-6">
          <h1 className="text-sm font-bold">Welcome Back <span className="font-bold text-yellow-500">{user.firstname}</span></h1>
          <div>
            <LogoutForm />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl py-4 px-6 mb-4 shadow-xl">
        <div className="py-4 border-gray-200 border-b">
          <h1 className="text-sm font-bold">Personel Details</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-4">
          <div className="col-span-1 text-center text-sm">
            <p className="pt-2">If you need to change your email address please contact support. All email address changes will require varification first before the change can be made</p>
            <p className="pt-2">You can email support direct <Link className="font-bold" href='mailto:justbenuk@gmail.com'>Here</Link></p>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <ChangeDetailsForm user={user} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl py-4 px-6 mb-4 shadow-xl">
        <div className="border-b border-gray-200">
          <h1 className="text-sm font-bold py-4">Change Password</h1>
        </div>
        <div className="mt-8">
          <ChangePasswordForm />
        </div>
      </div>
      <div className="bg-white rounded-xl py-4 px-6 mb-4 shadow-xl">
        <div className="border-b border-gray-200">
          <h1 className="text-sm font-bold py-4">Server Details</h1>
        </div>
        <div className="mt-8">
        </div>
      </div>
    </div>
  );
}
