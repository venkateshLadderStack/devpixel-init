import React from "react"

const SmallPromo = props => {
  return (
    <div className="promo">
      <div className="flat1">
        <h5>{props?.content?.heading}</h5>
        <p>{props?.content?.subContent}</p>
      </div>
    </div>
  )
}

export default SmallPromo
