import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className='header'>
        <Link href="/home">Home </Link>
          <Link href="/blog">Blog </Link>
          <Link href="/conference">Conference </Link>
          <Link href="/conference/sessions">Sessions </Link>
          <Link href="/conference/speakers">Speakers </Link>
          <Link href="/settings">Settings </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
