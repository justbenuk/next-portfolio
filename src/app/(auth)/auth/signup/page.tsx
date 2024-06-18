import { signup } from "@/actions/auth"

export default function SignUpPage(){
  return (
  <div>
      <form action={signup}>
        <input name='first-name' type='text' id='first-name' placeholder='First Name' />
        <input name='last-name' type='text' id='last-name' placeholder='Last Name' />
        <input name='email' type='email' id='email' placeholder='Email'/>
        <input name='password' type='password' id='password' placeholder='Password'/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
