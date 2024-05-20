import React, { useEffect, useRef, useState } from 'react'

const THRESHOLD = 0

export const useScrollDirection = () => {
  const [direction, setDirection] = useState('up')
  const blocking = React.useRef(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    prevScrollY.current = document.scrollingElement.scrollTop

    const updateScrollDirection = () => {
      let scrollY = document.scrollingElement.scrollTop

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newDirection = scrollY > prevScrollY.current ? 'down' : 'up'
        setDirection(newDirection)
        prevScrollY.current = scrollY > 0 ? scrollY : 0
      }

      blocking.current = false
    }

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true
        window.requestAnimationFrame(updateScrollDirection)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [direction])

  return direction
}
