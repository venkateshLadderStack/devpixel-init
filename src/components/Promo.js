import React from "react"

const Promo = props => {
  return (
    <div className={`promo ${props.content.class}`}>
      <div className="deal">
        <img
          src={props.content.image.localFile.publicURL}
          alt={props.content.image.localFile.name}
          className="img-fluid"
        />
        <div className="flat">
          <h5>{props.content.heading}</h5>
          <p>
            {props.content.sub_content}
          </p>
        </div>
      </div>
      <div className="greenline hideline"></div>
    </div>
  )
}

export default Promo
