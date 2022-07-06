const Item = (props) => {
  let title = props.title
  let icon = props.icon
  let description = props.desk
  let link = props.link

  if (!title || title === " ") {
    title = "Untitled"
  }

  if (!description || description === " ") {
    description = "No description for " + title + " yet."
  }

  let learnMoreLink = () => {
    if (!link || link === " ") {
      return null;
    } else {
      return (
        <p>
          <a href={link}>Learn more about {title}</a>
        </p>
      )
    }
  }
  const action = () => {
    document.querySelector("." + props.target + "-chevron").classList.toggle("rotate-chevron")
    document.querySelector("." + props.target + "-desk").classList.toggle("toggle-it")
  }

  return (
    <div onClick={action} className='col-12 border-bottom skill-card-text'>
      <div className="row skill-card-focus">

        <div className="col">
          <i class={icon + " colored"}></i>
          {" "}
          <span>{title}</span>
        </div>

        <div className="col text-end">
          <i className={props.target + "-chevron fa fa-angle-double-down text-success"}></i>
        </div>

        <div className={props.target + "-desk col-12 bg-white skill-card-desk"}>
          <p>
            {description}
            {learnMoreLink()}
          </p>
        </div>

      </div>
    </div>
  )
}
export default Item