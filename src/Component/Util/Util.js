import { useEffect, useState, useRef } from 'react'
export function SlideAnim(mainRef, targetId) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );
    observer.observe(mainRef.current)
    
    if(isIntersecting) {
      mainRef.current.querySelectorAll(targetId).forEach((el) => {
        el.classList.add('slide-in')
      })
    } else {
      mainRef.current.querySelectorAll(targetId).forEach((el) => {
        el.classList.remove('slide-in')
      })
    }
    return () => observer.disconnect();
  }, [isIntersecting]);
  
}

export function SingleSlideAnim(targetRef, targetId) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.2
      }
    );
    observer.observe(targetRef.current)
    
    if(isIntersecting) {
      targetRef.current.querySelectorAll(targetId).forEach((el) => {
        el.classList.add('single-slide-in')
      })
    } else {
      targetRef.current.querySelectorAll(targetId).forEach((el) => {
        el.classList.remove('single-slide-in')
      })
    }
    return () => observer.disconnect()
  }, [isIntersecting]);
  
}