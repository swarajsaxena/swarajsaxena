import CreativeHoverEffect from '@/components/CreativeTextEffect'
import { PageWrapper } from '@/components/PageWrapper'
import Image from 'next/image'
import React from 'react'

const experiences = [
  {
    title: 'Frontend Developer Intern',
    time: '(08/2022 - 2/2023)',
    company: 'Outmarch • New Delhi, Delhi',
    site: 'https://www.outmarch.io/',
    responsibilities: [
      'Developing user interface components and implementing them following well-known React.js workflows such as Redux or React Native Framework for mobile app development',
      'Translating designs and wireframes into high-quality.',
    ],
  },
  {
    title: 'React Developement Intern',
    time: '02/2022 - 04/2022',
    company: 'AdmyBrand • New Delhi, Delhi',
    site: 'https://admybrand.com/',
    responsibilities: [
      'Developing New User-Facing Features Using React.Js / Next JS / Tailwind CSS.',
      'Building Reusable Components And Front-End Libraries For Future Use.',
      'Translating Designs And Wireframes Into High-Quality Code.',
    ],
  },
  {
    title: 'Web Development Consultant',
    time: '09/2021 - 11/2021',
    company: 'SriMitra India • New Delhi, Delhi',
    site: 'https://srimitraindia.com/',
    responsibilities: [
      'Website and software application designing, building, or maintaining.',
      'Identifying problems uncovered by customers and testing, and correcting or problems to appropriate personnel for correction.',
    ],
  },
]

const page = () => {
  return (
    <PageWrapper>
      <div className='text-lg md:text-2xl font-medium'>
        <CreativeHoverEffect text='Experience' />
      </div>
      <div className='w-full p-1 md:p-2 bg-newBlack/20 rounded-xl'>
        <div className='w-full aspect-[2/1] border border-newBlack/20 overflow-hidden relative rounded-lg'>
          <Image
            src={'/work.jpg'}
            alt='work'
            fill
            objectFit='cover'
            className='saturate-0'
          />
        </div>
      </div>
      <div className='flex flex-col items-start gap-2'>
        <div className='text-base md:text-lg'>Places I have worked in</div>
        <div className='flex'>
          <div className='w-[6px] bg-newGrey/30' />
          <div className='flex flex-col gap-4 py-2'>
            {experiences.map((exp, index) => (
              <div key={index} className='relative flex flex-col gap-1'>
                <div className='absolute w-4 h-[2px] bg-gradient-to-r from-45% from-newGrey/30 to to-85% to-transparent top-3 -left-[0]  group-hover:scale-125 transition-all' />
                <div className='flex items-center gap-2 pl-6 text-sm md:text-lg font-medium text-newBlack'>
                  <CreativeHoverEffect text={exp.title} />
                  <div className='w-4 h-[2px] bg-gradient-to-r from-45% from-newGrey/30 to to-85% to-transparent group-hover:scale-125 transition-all flex-1' />
                </div>
                <div className='flex items-center gap-2 pl-3 mt-2 text-sm '>
                  <a
                    href={exp.site}
                    className='underline normal-case hover:text-newBlack'
                  >
                    {exp.company.split('•')[0]}
                  </a>
                  •{exp.company.split('•')[1] + ' '}
                  <div className='hidden text-sm normal-case md:block'>
                    • {exp.time}
                  </div>
                </div>
                <div className='pl-3 text-sm italic text-newBlack'>
                  {exp.responsibilities.join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default page
