import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>Sorry! The page you are looking for doesn't exist.</h1>
      <p>I may be working on this now. Or you may have typed the wrong address</p>
      <Link href='/'>Go Back Home</Link>
    </div>
  )
}
