import { login } from "@/actions/auth"

export default function SignUpPage(){
  return (
  <div>
      <form action={login}>
        <input name='email' type='email' id='email' placeholder='Email'/>
        <input name='password' type='password' id='password' placeholder='Password'/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
