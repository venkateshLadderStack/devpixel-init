import React from "react"

const SalesForcePageBox = ({ content }) => {
  return (
    <div
      className={`col-12 col-md rounded ${content?.colorOptions} p-5 m-md-3 mb-4`}
    >
      <img
        src={content?.icon?.localFile?.publicURL}
        alt={content?.icon?.localFile?.name}
        className="img-fluid "
      />

      <h3 className="mt-3">{content?.heading}</h3>
      <div dangerouslySetInnerHTML={{ __html: content?.subContent }}></div>
    </div>
  )
}

export default SalesForcePageBox
