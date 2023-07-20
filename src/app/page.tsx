'use client'

import { PageWrapper } from '@/components/PageWrapper'
import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import { ReactNode } from 'react'
import Link from 'next/link'
import CreativeHoverEffect from '@/components/CreativeTextEffect'
import { tech } from './stack/page'
import LinkButton from '@/components/LinkButton'

function Row({ first, last }: { first: ReactNode; last: ReactNode }) {
  return (
    <div className='flex items-end justify-between w-full gap-3 group hover:text-newBlack'>
      {first}
      <div className='h-[1px] flex-1 bg-newGrey/50 mb-[6px]'>
        <div className='h-[1px] w-0 bg-newBlack/50 group-hover:w-full transition-all duration-200' />
      </div>
      {last}
    </div>
  )
}

export default function Home() {
  return (
    <PageWrapper>
      <div className='flex gap-2'>
        <div className='w-10 h-10 overflow-hidden rounded-full'>
          <Image
            src={'/ss.jpg'}
            alt='ss'
            width={50}
            height={50}
          />
        </div>
        <div className='flex flex-col text-sm font-medium'>
          <div className='text-newBlack'>Swaraj Saxena</div>
          <div className=''>B. 2000</div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-2xl font-medium '>
          Transforming Ideas into{' '}
          <span className='font-bold text-newBlack'> Digital Reality!</span>
        </div>
        <div className='text-lg'>
          With a strong foundation in web and app development and a keen
          interest in cybersecurity, I am a versatile and adaptable software
          developer with two years of experience. Whether working on a new
          project from the ground up or troubleshooting and optimizing existing
          systems, I bring a proactive and problem-solving approach to every
          task.
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between text-lg font-medium text-newBlack'>
          <CreativeHoverEffect text='Where To find me' />
          {/* <LinkButton text='All' link='/experience' /> */}
        </div>
        <div className='flex flex-col gap-2'>
          <Row
            first={<>LinkedIn</>}
            last={
              <a
                href='https://www.linkedin.com/in/swaraj-saxena-184b1b1a7/'
                target='_blank'
                className='text-xs'
              >
                Follow
              </a>
            }
          />
          <Row
            first={<>Github</>}
            last={
              <a
                href='https://www.github.com/swarajsaxena/'
                target='_blank'
                className='text-xs'
              >
                Follow
              </a>
            }
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between text-lg font-medium text-newBlack'>
          <CreativeHoverEffect text='Experience' />
          <LinkButton
            text='All'
            link='/experience'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Row
            first={<>Outmarch</>}
            last={<div className='text-xs'>08/2022 - 03/2023</div>}
          />
          <Row
            first={<>AdmyBrand</>}
            last={<div className='text-xs'>02/2022 - 04/2022</div>}
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between text-lg font-medium text-newBlack'>
          <CreativeHoverEffect text='My Projects' />
          <LinkButton
            text='All'
            link='/projects'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Row
            first={<>BlendR</>}
            last={<div className='text-xs'>Frontend</div>}
          />
          <Row
            first={<>Wander Hub</>}
            last={<div className='text-xs'>Fullstack</div>}
          />
          <Row
            first={<>Disney Clone</>}
            last={<div className='text-xs'>Frontend + Firebase</div>}
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between text-lg font-medium text-newBlack'>
          <CreativeHoverEffect text='My Stack' />
          <LinkButton
            text='All'
            link='/stack'
          />
        </div>
        <div className='flex flex-wrap gap-6'>
          {tech.map((t, index) => (
            <Image
              key={index}
              src={t.path}
              width={60}
              height={60}
              alt={t.name}
              className='border rounded-full shadow-lg'
              title={t.name}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
