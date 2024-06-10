import Link from "next/link";

export default function Footer(){
  return (
  <footer className="text-xs text-center py-2 bg-gray-900 w-full text-white">Built By <Link className="text-sm underline font-semibold" href='/about'>Me</Link></footer>
  )
}
