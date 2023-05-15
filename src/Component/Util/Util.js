import { useEffect, useState } from 'react'

export function SingleSlideAnim(targetRef, targetId) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.2,
      },
    )
    observer.observe(targetRef.current)

    if (isIntersecting) {
      targetRef.current.querySelectorAll(targetId).forEach((el) => {
        el.classList.add('single-slide-in')
      })
    }
    return () => observer.disconnect()
  }, [isIntersecting, targetId, targetRef])
}

export function AnimInfinity(targetRef, targetId) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.2,
      },
    )
    observer.observe(targetRef.current)

    if (isIntersecting) {
      targetRef.current.querySelectorAll(targetId).forEach((el) => {
        el.classList.add('single-slide-in')
      })
    } else {
      targetRef.current.querySelectorAll(targetId).forEach((el) => {
        el.classList.remove('single-slide-in')
      })
    }
    return () => observer.disconnect()
  }, [isIntersecting, targetId, targetRef])
}
