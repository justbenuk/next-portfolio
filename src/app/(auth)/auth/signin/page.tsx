import { login } from "@/actions/auth"
import Link from "next/link"
export default function SignInPage() {
  return (
    <div className="h-screen">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 h-full">
        <div className="flex flex-col items-center justify-center h-full ">
        <form action={login} className="flex flex-col gap-4 border rounded-xl shadow-xl bg-gray-900 p-8">
            <p className="text-white uppercase text-xs font-bold">Login to get access to your account</p>
          <input name='email' type='email' id='email' placeholder='Email'  className="border border-gray-900 rounded p-1"/>
          <input name='password' type='password' id='password' placeholder='Password' className="border border-gray-900 rounded p-1"/>
          <button type='submit' className="bg py-2 rounded">Login</button>
            <div className="">
              <p className="text-white text-xs">If you do not have an account please <Link href='/auth/signup' className="ytitle">register</Link> or Go Back <Link href='/' className="ytitle">Home</Link></p>
            </div>
        </form>
        </div>
      </div>
    </div>
  )
}
