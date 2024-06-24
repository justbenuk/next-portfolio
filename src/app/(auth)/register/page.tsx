import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/forms/register-form";
export default function SignUpPage() {
  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 border rounded-xl shadow-xl overflow-hidden">
          <div className="col-span-1">
            <Image src='/assets/register.jpg' alt='a quote' height={500} width={500} className="w-full h-full" />
          </div>
          <div className="col-span-1 lg:col-span-2 px-8 py-4">
            <div className="text-center py-6">
              <h1 className="text-xl font-bold">Register</h1>
              <p className="mt-2 xl:w-2/3 mx-auto">Access for clients of Just Ben UK</p>
            </div>
            <RegisterForm />
            <div className="flex flex-row items-center justify-center">
              <Link href='/login' className="text-center mt-4 text-sm text-gray-700">Already have an account? Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
