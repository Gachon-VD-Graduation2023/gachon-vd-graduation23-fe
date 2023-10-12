import { useEffect, useState } from 'react'

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const updateScrollPos = () => {
      setScrollPos(window.pageYOffset)
    }

    window.addEventListener('scroll', updateScrollPos)

    return () => window.removeEventListener('scroll', updateScrollPos)
  }, [])

  return scrollPos
}

export default useScrollPosition
