import React from "react"

const SmallPromo = props => {
  return (
    <div className="promo">
      <div className="flat1">
        <h5>{props.content.heading}</h5>
        <p>
        {props.content.sub_content}
        </p>
      </div>
    </div>
  )
}

export default SmallPromo
