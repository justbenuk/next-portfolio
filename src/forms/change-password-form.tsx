'use client'
import { useFormState } from "react-dom"
import { Input } from '@nextui-org/react'
import { ChangePasswordAction } from "@/actions/user-actions"


export default function ChangePasswordform() {
  const [formState, formAction] = useFormState(ChangePasswordAction, {} as any)

  return (
    <form action={formAction}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <Input type='password' name='currentpassword' id='currentpassword' label='Current Password' variant="bordered" className="mb-4" isInvalid={formState?.errors?.current ? true : false} errorMessage={formState?.errors?.current}/>
        <Input type='password' name='newpassword' id='newpassword' label='New Password' variant="bordered" className="mb-4" isInvalid={formState?.errors?.new ? true : false} errorMessage={formState?.errors?.new}/>
        <Input type='password' name='checkpassword' id='checkpassword' label='Re-type Password' variant="bordered" className="mb-4" isInvalid={formState?.errors?.check ? true : false} errorMessage={formState?.errors?.check}/>
      </div>
      <div className="flex flex-row items-center justify-end">
        <button className="bg-red-500 text-white px-6 py-1.5 font-bold text-xs rounded-xl">Change Password</button>
      </div>
    </form>
  )
}
