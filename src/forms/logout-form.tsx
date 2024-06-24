import { logout } from "@/actions/auth"

export default function LogoutForm() {
  return (
    <form action={logout}>
      <button className="text-sm font-bold">Log Out</button>
    </form>

  )
}
