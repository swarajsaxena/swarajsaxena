import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

export default function LinkButton({
  link,
  text,
  target,
}: {
  link: string
  text: string
  target?: boolean
}) {
  return (
    <Link
      href={link}
      target={(target && '_blank') || '_self'}
      className='flex items-center px-2 py-1 text-sm font-normal transition-all rounded-md cursor-pointer text-newBlack group hover:bg-newBlack/20 relative z-50'
    >
      <span>{text || 'All'}</span>
      <FiChevronRight className='mr-[2px] group-hover:translate-x-1 transition-all' />
    </Link>
  )
}
