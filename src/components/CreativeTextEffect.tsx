/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'

const CreativeHoverEffect = ({
  text,
  className,
  delay,
}: {
  text: string
  className?: string
  delay?: number
}) => {
  const [displayText, setDisplayText] = useState('')

  let interval: NodeJS.Timer | number | undefined = undefined

  const startAnimation = () => {
    let iteration = 0

    clearInterval(interval)

    setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText((prevDisplayText: string) => {
          return prevDisplayText
            .split('')
            .map((_letter: any, index: number) => {
              if (index < iteration) {
                return text[index]
              }

              const letters =
                '+/*-~1234/.,[;])(*&^%$#@!ABCDEFGHIJKLMN56789OPQRSTUVWXYZ'
              return letters[Math.floor(Math.random() * 26)]
            })
            .join('')
        })

        if (iteration >= text.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 25)
    }, delay || 0) // Add a delay of 1000 milliseconds (1 second) before starting the animation
  }

  useEffect(() => {
    setDisplayText(text)
    startAnimation()
    return () => {
      clearInterval(interval)
    }
  }, [interval])

  return <div className={className}>{displayText}</div>
}

export default CreativeHoverEffect
