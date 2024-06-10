'use client'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {

  //log the error
  useEffect(() => {
    console.log(error)
  }, [error])
  
  return (
    //TODO: style the error
    <div>
      <h2>Something Went Wrong!</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}