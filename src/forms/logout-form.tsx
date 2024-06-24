import { logout } from "@/actions/auth"

export default function LogoutForm() {
  return (
    <form action={logout}>
      <button>Log Out</button>
    </form>

  )
}
