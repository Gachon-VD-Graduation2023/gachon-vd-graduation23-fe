import { useEffect, useState, useCallback } from 'react'

export function useBetterMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean>()

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)
    const listener = () => setMatches(!!mediaQueryList.matches)
    listener()
    mediaQueryList.addEventListener('change', listener) // updated from .addListener
    return () => mediaQueryList.removeEventListener('change', listener) // updated from .removeListener
  }, [mediaQueryString])

  return matches
}

const getWindowInnerHeight = () => Number((window.innerHeight * 0.01).toFixed(2))
export function useVh(): number {
  const [vh, setVh] = useState<number>(0)

  const updateVh = useCallback(() => {
    const innerHeight = getWindowInnerHeight()

    document.documentElement.style.setProperty('--vh', `${innerHeight}px`)
    setVh(innerHeight)
  }, [setVh])

  useEffect(() => {
    updateVh()
    window.addEventListener('resize', updateVh)

    return () => {
      window.removeEventListener('resize', updateVh)
    }
  }, [updateVh])

  return vh
}
