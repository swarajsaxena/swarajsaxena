'use client'

import CreativeHoverEffect from '@/components/CreativeTextEffect'
import { PageWrapper } from '@/components/PageWrapper'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const tech = [
  { path: '/tech/brave.png', name: 'Brave', use: 'Browsing' },
  { path: '/tech/figma.png', name: 'Figma', use: 'Design' },
  { path: '/tech/framer.png', name: 'Framer', use: 'No Code' },
  { path: '/tech/insta.png', name: 'Instagram', use: 'Social Media' },
  { path: '/tech/node.png', name: 'Node', use: 'Backend' },
  {
    path: '/tech/premierepro.png',
    name: 'Premiere Pro',
    use: 'Video Editing',
  },
  { path: '/tech/react.png', name: 'React', use: 'Frontend' },
  // { path: '/tech/reactrouter.png', name: 'ReactRouter', use: '' },
  { path: '/tech/tailwind.png', name: 'Tailwind CSS', use: 'Styling' },
  { path: '/tech/vscode.png', name: 'VS Code', use: 'Code Editor' },
]
const page = () => {
  return (
    <PageWrapper>
      <div className='flex flex-col gap-4'>
        <CreativeHoverEffect
          className='text-sm font-medium'
          text='Stack'
        />
        <div className='text-2xl font-medium'>
          Things I <span className='font-bold text-newBlack'>use</span>
        </div>
        <div className='grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2'>
          {tech.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                type: 'spring',
                damping: 10,
                stiffness: 100,
              }}
              key={t.path}
              className='flex items-center gap-2 p-2 transition-all rounded-md hover:bg-slate-700/5'
            >
              <div className='w-10 h-10 overflow-hidden rounded-full shadow-md'>
                <Image
                  src={t.path}
                  width={40}
                  height={40}
                  alt={t.name}
                />
              </div>
              <div className='flex flex-col text-sm font-medium'>
                <CreativeHoverEffect className='text-newBlack' text={t.name} />
                <div>{t.use}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

export default page
