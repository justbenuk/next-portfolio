'use server'
import { db } from "@/lib/db/db"
import { revalidatePath } from "next/cache"

export default async function ChangeDetailsAction(currentState: any, formData: FormData) {
  const firstname = formData.get('firstname') as string
  const lastname = formData.get('lastname') as string
  const email = formData.get('email') as string

  console.log(formData)

  if (!firstname || !lastname || !email) {
    throw new Error('Something Went Wrong')
  }

  const updateUser = await db.user.update({
    where: {
      email: email
    },
    data: {
      firstname,
      lastname,

    }
  })

  revalidatePath('/dashboard')
}
