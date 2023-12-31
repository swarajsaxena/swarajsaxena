'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className={classNames(
      'min-h-screenHeightWithoutHeader flex flex-col gap-4 md:gap-8 px-2 md:px-4',
      className
    )}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
)
