import './Button.css'
import { useState, useEffect, useRef } from 'react'

export default function ScrollUpButton() {
  const btnUpRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop
      // Get the current vertical scroll position

      // Check if the scroll position is greater than or equal to 100 pixels
      if (scrollY < 712) {
        if (btnUpRef.current && btnUpRef.current.classList) {
          btnUpRef.current.classList.add('hide-upbtn')
        }
      } else {
        if (btnUpRef.current && btnUpRef.current.classList) {
          btnUpRef.current.classList.remove('hide-upbtn')
        }
      }
    }

    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [btnUpRef]) // Empty dependency array ensures the effect only runs on mount and unmountl

  const handleOnGoUp = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <div onClick={handleOnGoUp} className='hide-upbtn' ref={btnUpRef} id='scrollUpButton'>
      <div>
        <i className='fa fa-chevron-up'></i>
      </div>
    </div>
  )
}
