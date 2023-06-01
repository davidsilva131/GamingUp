'use client'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'
import Image from 'next/image'
import GupLogo from '@/app/GUP_LOGO.webp'
const LINKS = [
  {
    text: 'Inicio',
    href: '/'
  },
  {
    text: 'Equipos',
    href: '/equipos'
  },
  {
    text: 'Tienda',
    href: '/tienda'
  }
]
const dancing = Dancing_Script({ subsets: ['latin'] })

const NavBar = ({ children }: { children: React.ReactNode }) => {
  const toggleSidebar = () => {
    const side = document.getElementById(
      'my-drawer-3'
    ) as HTMLInputElement | null
    side?.click()
  }

  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* <!-- Navbar --> */}
        <div className='w-full navbar bg-gup-dark'>
          <div className='flex-none lg:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current text-gup-green'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div className='flex-1 justify-center lg:justify-start px-2 mx-2 text-gup-green'>
            <Image
              src={GupLogo}
              alt='Gaming Up Logo'
              width={100}
              height={100}
            />
          </div>
          <div className='flex-none hidden lg:block'>
            <ul className='flex gap-12 pr-6'>
              {LINKS.map((link) => (
                <li key={`${link.text} navbar`}>
                  <Link
                    className={`${dancing.className} text-gup-green text-3xl transition-all duration-500 ease-out hover:ease-in hover:text-white `}
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {children}
      </div>
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
    </div>
  )
}

export default NavBar
