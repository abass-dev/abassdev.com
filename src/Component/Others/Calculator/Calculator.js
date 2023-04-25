import { useEffect, useRef } from 'react'
import { Nav } from '../../'
import './calculator.css'

export default function Calculator() {
  let screenRef = useRef(null)
  let equalRef = useRef(null)
  let clearRef = useRef(null)
  
useEffect(() => {
  let buttons = document.querySelectorAll(".button");
  
  buttons.forEach(button => button.addEventListener('click', e => screenRef.current.value += e.target.dataset.num));
  equalRef.current.addEventListener('click', () => screenRef.current.value === '' ? screenRef.current.value = 'Please enter a value': screenRef.current.value = eval(screenRef.current.value));
  clearRef.current.addEventListener('click', () => screenRef.current.value = '')
}, [])

  return (
    <>
    <div className='calculator-root'>
    <div className='calculator-container'>
        <form>
        <input ref={screenRef} type="text" className="screen" />
    </form>
    
    <div className="buttons">
    <button type="button"  className="button green-btn" data-num="*">*</button>
    <button type="button"  className="button green-btn" data-num="/">/</button>
    <button type="button"  className="button green-btn" data-num="-">-</button>
    <button type="button"  className="button green-btn" data-num="+">+</button>
    
    <button type="button"  className="button gray-btn" data-num="9">9</button>
    <button type="button"  className="button gray-btn" data-num="8">8</button>
    <button type="button"  className="button gray-btn" data-num="7">7</button>
    <button type="button"  className="button gray-btn" data-num="6">6</button>
    <button type="button"  className="button gray-btn" data-num="5">5</button>
    <button type="button"  className="button gray-btn" data-num="4">4</button>
    <button type="button"  className="button gray-btn" data-num="3">3</button>
    <button type="button"  className="button gray-btn" data-num="2">2</button>
    <button type="button"  className="button gray-btn" data-num="1">1</button>
    <button type="button"  className="button gray-btn" data-num="0">0</button>
    <button type="button"  className="button gray-btn" data-num=".">.</button>
    
    <button type="button" ref={equalRef} className="equal-btn" >=</button>
    <button type="button" ref={clearRef} className="clear-btn" >AC</button>
    
</div>
</div>
</div>
</>
    )
}