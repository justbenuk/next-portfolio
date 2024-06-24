"use client";
import { signup } from "@/actions/auth";
import { useFormState } from "react-dom";
import { useState } from "react";
import { Input } from '@nextui-org/react'
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function RegisterForm() {
  const initialState = {};

  const [formState, formAction] = useFormState(signup, initialState as any);
  const [isVisable, setIsVisable] = useState(false)

  return (
    <form
      action={formAction}
    >
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="w-full">
          <Input name='firstname' id='firstname' variant='bordered' label='First Name' type="text" className="mb-4" required />
          <Input name='lastname' id='lastname' variant='bordered' label='Last Name' type="text" className="mb-4" required />
        </div>
        <div className="w-full">
          <Input name='email' id='email' variant='bordered' label='Email' type="email" className="mb-4" required />
          <Input name='password' id='password' variant='bordered' label='Password' type={isVisable ? "text" : "password"} className="mb-4" required endContent={
            <p className="cursor-pointer" onClick={() => setIsVisable(!isVisable)}>
              {isVisable ? (
                <FaEye />
              ) : (
                <FaEyeSlash />
              )}
            </p>
          } />
        </div>
      </div>
      {formState.errors && (
        <ul className="p-2 text-red-500 font-bold text-xs">
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
      <button type="submit" className="w-full mt-4 bg-gray-900 ytitle py-4 rounded-xl font-bold text-sm">
        Register
      </button>
    </form>

  )
}
