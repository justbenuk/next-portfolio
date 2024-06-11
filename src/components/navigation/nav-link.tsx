'use client'
import Link from "next/link"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

type NavLinkProp = {
  href: string,
  children: ReactNode
}

export default function NavLink({href, children}: NavLinkProp) {
  const path = usePathname()

  return (
    <Link href={href} className={path.startsWith(href) ? 'underline font-bold uppercase decoration-yellow-300 decoration-2 underline-offset-8 text-sm' : 'text-sm font-bold uppercase'}>
      {children}
    </Link>

  )
}
