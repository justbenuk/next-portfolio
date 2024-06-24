'use client'
import { UserType } from "@/types"
import { useFormState } from "react-dom"
import { useState } from "react"
import { Input } from '@nextui-org/react'
import ChangeDetailsAction from "@/actions/user-actions"

export default function ChangeDetailsForm({ user }: UserType) {
  const [formState, formAction] = useFormState(ChangeDetailsAction, {} as any)
  const [form, setForm] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email
  })
  return (
    <form className="w-full" action={formAction}>
      <Input name='firstname' id='firstname' variant="bordered" label='First Name' value={form.firstname} className="mb-5" onChange={(e) => setForm({...form, firstname: e.target.value})}/>
      <Input name='lastname' id='lasttname' value={form.lastname} className="mb-5" variant="bordered" label='Last Name' onChange={(e) => setForm({...form, lastname: e.target.value})}/>
      <Input name='email' id='email' value={form.email} className="mb-5" variant="bordered" label='Email' readOnly/>
      <div className="flex flex-row items-center justify-end mt-10">
        <button className="bg-red-500 text-white px-6 py-1.5 font-bold text-xs rounded-xl">Change Details</button>
      </div>
    </form>
  )
}
