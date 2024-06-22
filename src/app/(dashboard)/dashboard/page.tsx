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
      <div className="border-gray-500 py-4 border-b flex flex-row justify-between items-center mb-10">
        <h1>Dashboard</h1>
        <div>
          <form action={logout}>
            <button>Logout</button>
          </form>
        </div>
      </div>
      <div>
        <UserInfo user={user} />
      </div>
    </div>
  );
}
