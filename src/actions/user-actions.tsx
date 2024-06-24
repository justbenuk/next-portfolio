'use server'
import { verifyAuth } from "@/lib/db/auth"
import { db } from "@/lib/db/db"
import { revalidatePath } from "next/cache"
import { hashUserPassword, verifyPassword } from "@/lib/db/hash"

export async function ChangeDetailsAction(currentState: any, formData: FormData) {
  const firstname = formData.get('firstname') as string
  const lastname = formData.get('lastname') as string
  const email = formData.get('email') as string

  if (!firstname) {
    return {
      errors: {
        firstname: 'Invalid First Name',
      }
    }
  }

if (!lastname) {
    return {
      errors: {
        lastname: 'Inavlid Last Name'
      }
    }
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

export async function ChangePasswordAction(currentState: any, formData: FormData) {
  const currentPassword = formData.get('currentpassword') as string
  const newPassword = formData.get('newpassword') as string
  const checkPassword = formData.get('checkpassword') as string

  //get the user
  const result = await verifyAuth()

  if (!result.user) {
    return {
      errors: {
        user: 'User Not Authorised'
      }
    }
  }

  const fetchUserPassword = await db.user.findUnique({
    where: {
      id: result.user.id
    },
    select: {
      password: true
    }
  })

  if (!fetchUserPassword) {
    return {
      errors: {
        user: 'User Not Authorised'
      }
    }
  }

  const isValidPassword = verifyPassword(fetchUserPassword.password, currentPassword)

  if (!isValidPassword) {
    return {
      errors: {
        current: 'Incorrect Password'
      }
    }
  }

  if(newPassword.length < 6){
    return {
      errors: {
        new: 'Password must be more than 6 charictors'
      }
    }
  }

  if (newPassword != checkPassword) {
    return {
      errors: {
        new: 'Passwords Do Not Match',
        check: 'Passwords Do Not Match'
      }
    }
  }

  const newHasedPassword = hashUserPassword(newPassword)

  await db.user.update({
    where: {
      id: result.user.id
    },
    data: {
      password: newHasedPassword
    }
  })

  revalidatePath('/dashboard', 'layout')
}
