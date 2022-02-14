import React from "react"
import styled from "styled-components"

const TeamCard = ({ name, title, img }) => {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="team-wrap">
        <div className="team-img">
          <EmployeeImg src={img} alt="" />
        </div>
        <div className="team-content">
          <h5>{name}</h5>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}

const EmployeeImg = styled.img`
  border-radius: 50%;
  width: 272px;
  height: 272px;
  object-fit: cover;
`

export default TeamCard
