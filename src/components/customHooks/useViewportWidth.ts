import { useEffect, useState } from 'react'

export function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    // Function to update the viewport width
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize)

    // Call the handleResize function once initially to get the initial viewport width
    handleResize()

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return viewportWidth
}
