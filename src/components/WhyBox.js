import React from "react"

const WhyBox = props => {
  return (
    <div className={`${props?.col ? "col-12 col-md-4" : ""}`}>
      <div
        className={`newboxd ${props?.col ? "newboxd3" : "newboxd2"} ${
          props?.name
        }`}
      >
        <div className="deliver2">
          <img
            src={props?.content?.icon?.localFile?.publicURL}
            alt={props?.content?.icon?.localFile?.name}
            className="img-fluid"
          />
          <h3>
            <span>{props?.content?.heading}</span>
          </h3>
          <p>{props?.content?.subHeading}</p>
        </div>
      </div>
    </div>
  )
}

export default WhyBox
