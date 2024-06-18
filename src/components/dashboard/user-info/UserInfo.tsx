type UserProps = {
  user: {
    firstname: string
    lastname: string
    email: string
    isAdmin: boolean
  }
}
export default function UserInfo({user}: UserProps){
  return (
  <div>
      {user.firstname} {user.lastname}
      {user.email}
      {user.isAdmin === false ? 'false' : 'true'}
    </div>
  )
}
