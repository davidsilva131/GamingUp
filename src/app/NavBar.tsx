import Link from 'next/link'
import Image from 'next/image'
import GupLogo from '@/app/GUP_LOGO.webp'
import { LINKS, dancing } from '@/constants'
import Sidebar from '@/app/SideBar'

const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
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
      <Sidebar />
    </div>
  )
}

export default NavBar
