import { AnimInfinity } from '../Util/Util'
import { useRef } from 'react'

function Item(props) {
  const skillRef = useRef(null)
  AnimInfinity(skillRef, '.skillRefID')

  let title = props.title
  let icon = props.icon
  let description = props.desk
  let link = props.link

  if (!title || title === ' ') {
    title = 'Untitled'
  }

  if (!description || description === ' ') {
    description = 'No description for ' + title + ' yet.'
  }

  let learnMoreLink = () => {
    if (!link || link === ' ') {
      return null
    } else {
      return (
        <p>
          <a href={link}>Learn more about {title}</a>
        </p>
      )
    }
  }
  const action = () => {
    document.querySelector('.' + props.target + '-chevron').classList.toggle('rotate-chevron')
    document.querySelector('.' + props.target + '-desk').classList.toggle('toggle-it')
  }

  return (
    <div ref={skillRef} onClick={action} className={`col-12 skill-card-focus skill-card-text`}>
      <div className='row skillRefID zoom-in'>
        <div className='col-9 p-1 skill-card-title-focus'>
          <i class={icon}></i> <span>{title}</span>
        </div>

        <div className='col-3 skill-card-title-focus text-end'>
          <i className={props.target + '-chevron fa fa-angle-double-down'}></i>
        </div>

        <div className={props.target + '-desk toggle-it col-12 skill-card-desk'}>
          <p>{description}</p>
          <p>{learnMoreLink()}</p>
        </div>
      </div>
    </div>
  )
}
export default Item
