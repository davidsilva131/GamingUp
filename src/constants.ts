import { Dancing_Script } from 'next/font/google'
import InstagramLogo from '@/assets/instagram.svg'
import TwitterLogo from '@/assets/twitter.svg'
import TiktokLogo from '@/assets/tiktok.svg'
import TwitchLogo from '@/assets/twitch.svg'
import DiscordLogo from '@/assets/discord.svg'

export const LINKS = [
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

export const dancing = Dancing_Script({ subsets: ['latin'] })

export const SOCIALS = [
  {
    socialName: 'Instagram',
    image: InstagramLogo,
    link: 'https://www.instagram.com/teamgamingup/'
  },
  {
    socialName: 'Twitter',
    image: TwitterLogo,
    link: 'https://twitter.com/teamgamingup'
  },
  {
    socialName: 'Tiktok',
    image: TiktokLogo,
    link: 'https://www.tiktok.com/@teamgamingup'
  },
  {
    socialName: 'Twitch',
    image: TwitchLogo,
    link: 'https://www.twitch.tv/gamingupteam'
  },
  {
    socialName: 'Discord',
    image: DiscordLogo,
    link: 'https://discord.com/invite/j5UmVWJ3'
  }
]
