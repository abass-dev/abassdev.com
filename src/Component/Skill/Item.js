const Item = (props) => {
  
  const action = () => {
    document.querySelector("."+props.target+"-chevron").classList.toggle("rotate-chevron")
    document.querySelector("."+props.target+"-desk").classList.toggle("hideit")
  }
  
  return (
      <div onClick={action} className='col-12 border-bottom skill-card-text'>
        <div className="row skill-card-focus">
         
          <div className="col">
            <i class={props.icon + " colored"}></i>
            {" "}
            <span>{props.title}</span>
          </div>
         
          <div className="col text-end">
            <i className={props.target + "-chevron fa fa-angle-double-down text-success"}></i>
          </div>
          
          <div className={props.target +"-desk hideit col-12 bg-white skill-card-desk"}>
            <p>
              {props.desk}
              <br />
              <a href={props.link}>Learn more about {props.title}</a>
            </p>
          </div>
          
        </div>
      </div>
    )
}
export default Item