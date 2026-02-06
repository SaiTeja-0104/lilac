"use client"

import { useEffect, useRef, useState } from "react"

const DEFAULT_THRESHOLD = 0.15
const DEFAULT_ROOT_MARGIN = "0px 0px -10% 0px"

const useReveal = (threshold = DEFAULT_THRESHOLD, rootMargin = DEFAULT_ROOT_MARGIN) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

export default useReveal
