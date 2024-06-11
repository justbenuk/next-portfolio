import Link from 'next/link'
export default function Hero() {

  return (
    <div className="bg-yellow-300">
      <div className="max-w-7xl mx-auto min-h-[80dvh] px-6 lg:px-0">
          <div className="flex flex-col items-center justify-center min-h-[70dvh]">
            <h1 className='text-4xl lg:text-8xl uppercase font-bold word-wrap text-center'>I'm Learning To Code</h1>
          <p className='lg:w-2/3 mx-auto w-full text-2xl text-center'>by building web applications from blogs to portfolio's. Take a look at my projects to see what I have been working on recently</p>
          <Link href='/projects' className='border rounded-xl px-6 py-2 uppercase border-black hover:bg-black hover:text-white'>Projects</Link>
          </div>
      </div>
    </div>
  )
}
