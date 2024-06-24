'use server'
import { db } from "@/lib/db/db"
import { createAuthSession, destroySession, verifyAuth } from "@/lib/db/auth"
import { generateId } from "lucia"
import { hashUserPassword, verifyPassword } from "@/lib/db/hash"
import { redirect } from "next/navigation"
import { AuthProps } from '@/types'


export async function signup(prevState: any, formData: FormData): Promise<AuthProps> {

  const id = generateId(15)
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const firstname = formData.get('firstname') as string
  const lastname = formData.get('lastname') as string

  let errors: AuthProps = {}

  //check if an email address has been added
  if (!email) {
    return {
      errors: {
        email: 'No Email Provided'
      }
    }
  }

  //check if password is entered and the correct length
  if (password.length < 6) {
    return {
      errors: {
        password: 'Your Password needs to be longer then 6 characters'
      }
    }
  }

  //return errors if there are any
  if (Object.keys(errors).length > 0) {
    return {
      errors
    }
  }

  // hash the password
  const hashedPassword = hashUserPassword(password)

  //add the new user
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
    return {
      errors: {
        password: 'Something Went Wrong'
      }
    }
  }
  redirect('/dashboard')
}

//login the user
export async function login(prevState: any, formData: FormData): Promise<AuthProps> {

  //get the results from the form
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  //initialise the errors and then set errors on validation
  let errors: AuthProps = {}

  //check for an entered email
  if (!email) {
    errors.email = 'No Email Address Provided'
  }

  //check if there is a password
  if (!password) {
    errors.password = 'No Password Entered'
  }

  //return any errors
  if (Object.keys(errors).length > 0) {
    return {
      errors
    }
  }

  //login 
  try {
    //check if the user exists
    const existingUser = await db.user.findUnique({
      where: {
        email
      }
    })

    //check if there is a user
    if (!existingUser) {
      return {
        errors: {
          password: 'Could Not Authenticate User'
        }
      }
    }

    //check if valid password
    const isValidPassword = verifyPassword(existingUser.password, password)

    if (!isValidPassword) {
      return {
        errors: {
          password: 'Could Not Authenticate User'
        }
      }
    }

    //login and create a user session
    await createAuthSession(existingUser.id)

  } catch (error) {
    //if there is an error -> return the error
    if (error) {
      return {
        errors: {
          email: 'Something went wrong'
        }
      }
    }
  }

  redirect('/dashboard')

}

// destroy the session ie logout
export async function logout() {
  await destroySession()
  redirect('/')
}

export async function getUser() {
  const result = await verifyAuth()

  if (!result.user) {
    return null
  }

  const user = await db.user.findUnique({
    where: {
      id: result.user.id
    },
    select: {
      email: true,
      firstname: true,
      lastname: true,
      password: false,
      isAdmin: false,
    }
  })

  // const user = exclude(resultwpassword, ['password'])

  return user
}
