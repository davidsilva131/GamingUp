'use client'
import { LINKS, dancing } from '@/constants'
import Link from 'next/link'

export default function Sidebar() {
  const toggleSidebar = () => {
    const side = document.getElementById(
      'my-drawer-3'
    ) as HTMLInputElement | null
    side?.click()
  }
  return (
    <div className='drawer-side'>
      <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
      <ul className='flex flex-col gap-16 py-4 pl-9 w-64 bg-gup-dark'>
        {LINKS.map((link) => (
          <li
            key={`${link.text} sidebar`}
            className={`${dancing.className} text-gup-green text-3xl`}
            onClick={() => toggleSidebar()}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
