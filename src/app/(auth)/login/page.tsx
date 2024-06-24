import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/forms/login-form";

export default function SignInPage() {

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 border rounded-xl shadow-xl overflow-hidden">
          <div>
            <Image src='/assets/login.jpg' alt='a nice city skyline in pink' height={500} width={500} className="w-full h-full"/>
          </div>
          <div className="px-8 py-4">
            <div className="text-center py-6">
              <h1 className="text-xl font-bold">Log In</h1>
              <p className="mt-2 xl:w-2/3 mx-auto">Access your support details, generate a ticket and manage your account</p>
            </div>
            <LoginForm />
            <div className="flex flex-row items-center justify-center">
              <Link href='/register' className="text-center mt-4 text-sm text-gray-700">Need and account? Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
