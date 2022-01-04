import React from "react"
import styled from "styled-components"

const AboutListHeading = styled.h3`
  @media (max-width: 500px) {
    font-size: 16px !important;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
`

const AboutList = props => {
  return (
    <div className="row align-items-center mb-4">
      <div
        className={`col-3 text-center big-number ${props.list.color_option}`}
      >
        {props.list.number}
      </div>
      <div className="col-9">
        <AboutListHeading className="text-white force">{props.list.heading}</AboutListHeading>
        <p className="text-white mb-3">{props.list.sub_heading}</p>
      </div>
    </div>
  )
}

export default AboutList
