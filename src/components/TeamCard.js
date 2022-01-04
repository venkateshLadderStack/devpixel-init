import React from "react"

const TeamCard = ({ name, title, img }) => {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="team-wrap">
        <div className="team-img">
          <img src={img} alt="" />
        </div>
        <div className="team-content">
          <h5>{name}</h5>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
