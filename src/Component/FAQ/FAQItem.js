function FAQItem(props) {
  let title = props.title
  let description = props.desk
  let moreDesk = props.moreDesk

  const action = () => {
    document.querySelector('.' + props.target + '-chevron').classList.toggle('rotate-chevron')
    document.querySelector('.' + props.target + '-desk').classList.toggle('toggle-it')
  }

  return (
    <div onClick={action} className={`skill-card-focus ${!props.lastChild && 'borderBottom'}`}>
      <div className='row px-3'>
        <div className='col-9 pt-3 skill-card-title-focus border-bottom'>
          <p className='h4'>{title}</p>
        </div>

        <div className='col-3 pt-3 skill-card-title-focus text-end border-bottom'>
          <i className={props.target + '-chevron fa fa-chevron-down rotate-icon'}></i>
        </div>

        <div className={props.target + '-desk toggle-it col-12 faq-card-desk pt-3'}>
          {description && <p style={{ fontSize: 16 }}>{description}</p>}
          {moreDesk &&
            moreDesk.map((v, i) => {
              return (
                <p style={{ fontSize: 16 }} key={i}>
                  {v}
                </p>
              )
            })}
        </div>
      </div>
    </div>
  )
}
export default FAQItem
