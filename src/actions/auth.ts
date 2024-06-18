'use server'
import { db } from "@/lib/db/db"
import { createAuthSession, destroySession } from "@/lib/db/auth"
import { generateId } from "lucia"
import { hashUserPassword, verifyPassword } from "@/lib/db/hash"
import { redirect } from "next/navigation"


export async function signup(formData: FormData) {

  const id = generateId(15)
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const firstname = formData.get('first-name') as string
  const lastname = formData.get('last-name') as string

  if (!email) {
    throw new Error('Invalid Email')
  }

  if (password.length < 6) {
    throw new Error('Password is to short')
  }

  const hashedPassword = hashUserPassword(password)

  try {

    const user = await db.user.create({
      data: {
        id,
        email,
        firstname,
        lastname,
        password: hashedPassword,
      }
    })

    await createAuthSession(user.id)

  } catch (error) {
    throw new Error('Something went wrong')
  }
  redirect('/dashboard')
}

//login the user
export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  //check if the user exists
  const existingUser = await db.user.findFirstOrThrow({
    where: {
      email
    }
  })

  if (!existingUser) {
    return redirect('/auth/signup')
  }

  //check if valid password
  const isValidPassword = verifyPassword(existingUser.password, password)

  if (!isValidPassword) {
    throw new Error('Invalid Credentials')
  }

  await createAuthSession(existingUser.id)

  redirect('/dashboard')
}

// destroy the session ie logout
export async function logout() {
  await destroySession()
  redirect('/')
}

export async function getUser(userId: string) {
  const user = await db.user.findFirstOrThrow({
    where: {
      id: userId
    }
  })

  console.log('get user called')

  return user
}
