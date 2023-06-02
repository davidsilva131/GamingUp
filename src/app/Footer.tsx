import Image from 'next/image'
import Link from 'next/link'
import GupLogo from '@/app/GUP_LOGO.webp'
import { SOCIALS } from '@/constants'

export default function Footer() {
  return (
    <footer className=' flex flex-col items-center min-h-36 w-full p-4 bg-gup-dark'>
      <section className='flex flex-col flex-wrap gap-9 items-center border-b border-white pb-5'>
        <div>
          <Link href='/'>
            <Image
              src={GupLogo}
              alt='Gaming Up Logo Footer'
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className='flex items-center'>
          <ul className='flex flex-wrap gap-5 justify-center'>
            {SOCIALS.map((social) => (
              <li key={`${social.socialName} footer link`}>
                <Link href={social.link} target='_blank' rel='noopener'>
                  <Image
                    src={social.image}
                    width={35}
                    height={35}
                    alt={`${social.socialName} de Gaming Up`}
                    className='transition-all ease-out duration-300 hover:opacity-80'
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <span className='text-white mt-3'>© GamingUp 2023</span>
    </footer>
  )
}
