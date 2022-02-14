import React from "react"

const JobCard = ({ title, jobType }) => {
  return (
    <div className="job-card">
      <h5>{title}</h5>
      <span>{jobType}</span>
    </div>
  )
}

export default JobCard
