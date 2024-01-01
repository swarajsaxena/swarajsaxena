'use client'

import CreativeHoverEffect from '@/components/CreativeTextEffect'
import { PageWrapper } from '@/components/PageWrapper'
import Image from 'next/image'
import React from 'react'
// import { LinkButton } from '../page'
import { motion } from 'framer-motion'
import LinkButton from '@/components/LinkButton'

const page = () => {
  const projects = [
    {
      link: 'https://inkit.vercel.app/',
      image: '/projects/inkit.png',
      name: 'Ink It',
      des: 'Crafting collaborative brilliance, Ink It transforms teamwork. Innovative note-taking, where ideas flow freely, fusing productivity with creativity.',
    },
    {
      link: 'https://blendr.vercel.app/',
      image: '/projects/blendr.png',
      name: 'BlendR',
      des: 'Redefining The Way We Choose Colors For Our UI/UX. Seamlessly Visualize, Test, and Optimize Color Schemes with Real-time Feedback. Revolutionize your workflow today!',
    },
    {
      link: 'https://wanderhub.vercel.app/',
      image: '/projects/wanderhub.png',
      name: 'Wander Hub',
      des: 'A Portal which lets you organise and view the itenaries of different trips which is also a social media platform.',
    },
    {
      link: 'https://blurr.vercel.app/',
      image: '/projects/blurr.png',
      name: 'Blurr',
      des: 'Dump Your Thoughts and Clear Your Mind. Your Thoughts Will Fade Into The Background After A Some Time. You Can Edit Your Thoughts For A Limited Time Of 5 Minutes.',
    },
    {
      link: 'https://disneyplus-clone-7cbf8.web.app/',
      image: '/projects/hotstar.png',
      name: 'Hotstar Clone',
      des: 'A working clone of the famous Disney Hotstar Streaming Platform',
    },
  ]
  return (
    <PageWrapper>
      <div className='flex flex-col gap-2 md:gap-4 '>
        <CreativeHoverEffect
          className='text-sm font-medium'
          text='Projects'
        />
        <div className='text-lg md:text-2xl font-medium'>
          Things I <span className='font-bold text-newBlack'>made</span>
        </div>
      </div>
      <div className='flex flex-col gap-4 md:gap-6'>
        {projects.map((p, index: number) => (
          <div
            key={index}
            className=''
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index / 5 }}
              className={`flex items-start justify-start gap-2 md:gap-4 group`}
            >
              <div className='relative h-12 mt-2 md:mt-0 md:h-28 border-2 rounded-md min-w-[48px] md:min-w-[112px] bg-newGrey/10 group-hover:border-newBlack/50 transition-all'>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  objectFit='cover'
                  className='transition-all group-hover:scale-125'
                />
              </div>
              <div className='flex flex-col md:gap-1'>
                <div className='flex items-center justify-between gap-1 text-base md:text-lg font-medium text-newBlack'>
                  <CreativeHoverEffect
                    text={p.name}
                    delay={(1 + index / 4) * 1000}
                  />
                  {/* <div>{p.name}</div> */}
                  <div className='text-xs'>
                    <LinkButton
                      target={true}
                      link={p.link}
                      text='Link'
                    />
                  </div>
                </div>
                <span className='text-xs md:text-sm'>
                  {p.des ||
                    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam numquam eveniet, ut dicta error rerum aliquid cumqueatque vel quaerat id rem nemo ratione non reprehenderit eius?'}
                </span>
              </div>
            </motion.div>
            {/* {index !== projects.length - 1 && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index / 5 }}
                className='w-full h-[1px] mt-4 md:mt-6 bg-newGrey/50'
              />
            )} */}
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}

export default page
