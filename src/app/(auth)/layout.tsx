import '../globals.css'
import { RootLayoutProps } from '@/types'
export const metadata = {
  title: 'Authentication | Just Ben UK',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
