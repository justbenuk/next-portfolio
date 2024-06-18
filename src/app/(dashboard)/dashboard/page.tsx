import UserInfo from "@/components/dashboard/user-info/UserInfo"
import { verifyAuth } from "@/lib/db/auth"
import { redirect } from "next/navigation"
import { getUser } from "@/actions/auth"

export default async function DashboardPage() {
  const result = await verifyAuth()

  if(!result){
    return redirect('/auth/login')
  }

  const user = await getUser(result.userId)

  if(!user){
    return redirect('auth/login')
  }
  return (
    <>
    <h1>Dashboard</h1>
      <div>
        <UserInfo user={user}/>
      </div>
    </>
  )
}
