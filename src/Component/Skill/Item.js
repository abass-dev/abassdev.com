
function Item(props) {

  let title = props.title
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
    <div onClick={action} className={`skill-card-focus ${!props.lastChild && 'borderBottom'}`}>
      <div className='row px-3  '>
        <div className='col-9 pt-3 skill-card-title-focus'>
          <p>{title}</p>
        </div>

        <div className='col-3 pt-3 skill-card-title-focus text-end'>
          <i className={props.target + '-chevron fa fa-chevron-down rotate-icon'}></i>
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
