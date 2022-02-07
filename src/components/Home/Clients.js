import { Link } from "gatsby"
import React from "react"

const Clients = ({ clients }) => {
  return (
    <>
      <div className="branf__fx">
        {clients?.map((item, i) => (
          <div
            className="brand__single"
            key={i}
            data-aos="zoom-in"
            data-aos-delay={`${5 * i}0`}
            data-aos-duration={`1${i}00`}
          >
            <Link to={item?.clientImage?.redirect_url}>
              <img src={item?.clientImage?.localFile?.publicURL} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Clients
