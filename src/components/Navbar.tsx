/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { IconType } from 'react-icons'
import {
  FiHome,
  FiLayers,
  FiShoppingBag,
  FiLinkedin,
  FiGithub,
  FiBriefcase,
} from 'react-icons/fi'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { useViewportWidth } from './customHooks/useViewportWidth'

const links = [
  { nextLink: true, name: 'Home', icon: FiHome, path: '/' },
  {
    nextLink: true,
    name: 'Experience',
    icon: FiBriefcase,
    path: '/experience',
  },
  {
    nextLink: true,
    name: 'Projects',
    icon: FiShoppingBag,
    path: '/projects',
  },
  { nextLink: true, name: 'My Stack', icon: FiLayers, path: '/stack' },
  // {
  //   nextLink: true,
  //   name: 'Album',
  //   icon: HiOutlinePhotograph,
  //   path: '/album',
  // },
  {
    nextLink: false,
    name: 'LinkedIn',
    icon: FiLinkedin,
    path: 'https://www.linkedin.com/in/swaraj-saxena-184b1b1a7/',
  },
  {
    nextLink: false,
    name: 'Github',
    icon: FiGithub,
    path: 'https://www.github.com/swarajsaxena/',
  },
]

export const NavbarSmall = () => {
  const pathname = usePathname()

  let refArray = links.map(() => useRef<HTMLDivElement>(null))

  return (
    <div className='absolute top-0 z-50 flex flex-col justify-end h-full md:hidden'>
      <div className='sticky bottom-4'>
        <div className='flex items-center gap-1 p-2 mx-auto bg-white border rounded-full shadow-lg border-newGrey/20'>
          {refArray.map((ref, i) => (
            <AppIcon
              activePath={pathname}
              key={i}
              reff={ref}
              link={links[i]}
            ></AppIcon>
          ))}
        </div>
      </div>
    </div>
  )
}
const Navbar = () => {
  const pathname = usePathname()

  let refArray = links.map(() => useRef<HTMLDivElement>(null))

  return (
    <div className='absolute top-0 bottom-0 hidden h-screen md:block -left-14'>
      <motion.div className='sticky flex flex-col items-center gap-2 p-2 mx-auto bg-white border rounded-full shadow-lg top-10 border-newGrey/20'>
        {refArray.map((ref, i) => (
          <AppIcon
            activePath={pathname}
            key={i}
            reff={ref}
            link={links[i]}
          ></AppIcon>
        ))}
      </motion.div>
    </div>
  )
}

const AppIcon = ({
  reff,
  link,
  activePath,
}: {
  reff: React.RefObject<HTMLDivElement>
  link: {
    icon: IconType
    path: string
    nextLink: boolean
    name: string
  }
  activePath: String
}) => {
  const [hover, setHover] = useState(false)

  const width = useViewportWidth()

  return (
    <Link
      target={!link.nextLink ? '_blank' : '_self'}
      href={link.path}
    >
      <motion.div
        ref={reff}
        className='relative flex items-center justify-center rounded-full cursor-pointer aspect-square'
      >
        <div
          className={`peer z-10 relative p-2 text-lg  rounded-full transition-all  ${
            activePath === link.path
              ? 'text-newBlack md:bg-newGrey/20'
              : 'text-gray-400'
          }`}
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
        >
          <link.icon />
        </div>
        {activePath === link.path && (
          <motion.span
            layoutId='bubble'
            className='absolute inset-0 bg-newGrey/20'
            style={{ borderRadius: 9999 }}
          />
        )}
        <div className='absolute top-0 px-2 py-1 text-xs font-medium transition-all rounded-md opacity-0 w-max bg-[#d8d8d8] text-newBlack md:right-0 peer-hover:opacity-100 peer-hover:-top-10 md:peer-hover:right-14 md:top-1/2 md:peer-hover:top-1/2 md:-translate-y-1/2'>
          {link.name}
        </div>
      </motion.div>
    </Link>
  )
}

export default Navbar
