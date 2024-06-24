import UserInfo from "@/components/dashboard/user-info/UserInfo";
import { redirect } from "next/navigation";
import { getUser } from "@/actions/auth";
import { logout } from "@/actions/auth";

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    return redirect("auth/login");
  }

  return (
    <div className="max-w-7xl mx-auto px-6 xl:px-0 mt-4">
      <div className="rounded-xl shadow-xl bg-white">
        <div className="flex flex-row justify-between items-center py-4 px-6">
          <h1>Welcome Back <span className="font-bold">{user.firstname}</span></h1>
          <div>
            <form action={logout}>
              <button>Log Out</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-xl py-4 px-6">
        <h1 className="text-sm font-bold">Personel Details</h1>
        <form>

        </form>
        <UserInfo user={user} />
      </div>
    </div>
  );
}
