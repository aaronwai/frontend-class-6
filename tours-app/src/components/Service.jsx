const Service = ({icon, title, info}) => {
  return (
     <article className="service">
                <span className="service-icon">
                    <i className={icon}></i>
                </span>
                <div className="service-info">
                    <h4>{title}</h4>
                    <p>{info}</p>
                </div>
            </article>
  )
}

export default Service