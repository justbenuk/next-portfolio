"use client";
import { signup } from "@/actions/auth";
import { useFormState } from "react-dom";

export default function SignUpPage() {
  const initialState = {
    errors: {},
  };
  const [formState, formAction] = useFormState(signup, initialState as any);
  return (
    <div className="h-screen">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 h-full">
        <div className="flex flex-col items-center justify-center h-full ">
          <form
            action={formAction}
            className="flex flex-col gap-4 border rounded-xl shadow-xl bg-gray-900 p-8"
          >
            <p className="text-white uppercase text-xs font-bold text-center">
              Register Your Account
            </p>
            <input
              name="first-name"
              type="text"
              id="first-name"
              placeholder="First Name"
              className="border border-gray-900 rounded p-1"
            />
            <input
              name="last-name"
              type="text"
              id="last-name"
              placeholder="Last Name"
              className="border border-gray-900 rounded p-1"
            />
            <input name="email" type="email" id="email" placeholder="Email" />
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
