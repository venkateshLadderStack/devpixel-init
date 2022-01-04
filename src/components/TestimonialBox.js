import React from "react"
import styled from "styled-components"

const AuthorWrapper = styled.div`
  display: inline-block;
  h3 {
    font-size: 14px !important;
  }
`

const TestimonialBox = props => {
  return (
    <div className="testmv testmv2">
      <blockquote>
        <p className="quotation">{props.testimonial.quote}</p>
      </blockquote>
      <div className="photot">
        <img
          src={props.testimonial.image.localFile.publicURL}
          alt={props.testimonial.image.localFile.name}
          className="img-fluid"
        />
        <AuthorWrapper
          dangerouslySetInnerHTML={{ __html: props.testimonial.author_detail }}
        />
      </div>
    </div>
  )
}

export default TestimonialBox
