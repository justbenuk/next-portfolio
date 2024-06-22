"use client";
import { login } from "@/actions/auth";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
  errors: {},
};

export default function SignInPage() {
  const [formState, formAction] = useFormState(login, initialState as any);

  return (
    <div className="h-screen">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 h-full">
        <div className="flex flex-col items-center justify-center h-full ">
          <form
            action={formAction}
            className="flex flex-col gap-4 border rounded-xl shadow-xl bg-gray-900 p-8"
          >
            <p className="text-white uppercase text-xs font-bold text-center">
              Login to get access to your account
            </p>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              className="border border-gray-900 rounded p-1"
            />
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              className="border border-gray-900 rounded p-1"
            />
            {formState.errors.length > 0 && (
              <ul className="bg-red-500 p-2 text-white font-bold text-xs">
                {Object.keys(formState.errors).map((error) => (
                  <li key={error}>{formState.errors[error]}</li>
                ))}
              </ul>
            )}

            <button type="submit" className="bg py-2 rounded">
              Login
            </button>
            <div className="">
              <p className="text-white text-xs">
                If you do not have an account please{" "}
                <Link href="/auth/signup" className="ytitle">
                  register
                </Link>{" "}
                or Go Back{" "}
                <Link href="/" className="ytitle">
                  Home
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
