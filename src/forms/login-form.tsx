"use client";
import { login } from "@/actions/auth";
import { useFormState } from "react-dom";
import { Input } from '@nextui-org/react'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const initialState = {};

export default function LoginForm() {
  const [formState, formAction] = useFormState(login, initialState as any);
  const [isVisable, setIsVisable] = useState(false)

  return (
    <form
      action={formAction}
      className="flex flex-col"
    >
      <Input name='email' id='email' variant='bordered' label='Email' type="email" required className="mb-4" />
      <Input name='password' id='password' variant='bordered' label='Password' type={isVisable ? "text" : "password"} className="mb-4" required endContent={
        <p className="cursor-pointer" onClick={() => setIsVisable(!isVisable)}>
          {isVisable ? (
            <FaEye />
          ) : (
            <FaEyeSlash />
          )}
        </p>
      } />
      {formState.errors && (
        <ul className="text-red-500 p-2 font-bold text-xs">
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
      <button type="submit" className="bg-gray-900 ytitle py-4 rounded-xl font-bold text-sm">
        Login
      </button>
    </form>

  )
}
