import React from 'react'

const Tour = ({
    image, date,title,info,location,duration,price
}) => {
  return (
    <article className="tour-card">
                <div className="tour-img-container">
                    <img src={image} alt="tour photo" className="tour-img" />
                    <p className="tour-date">{date}</p>
                </div>
               <div className="tour-info">
                <div className="tour-title"><h4>{title}</h4></div>
                <p>{info}</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>{location}</span></p>
                    <p>{duration} days</p>
                    <p>from ${price}</p>
                </div>
               </div>
            </article>
  )
}

export default Tour