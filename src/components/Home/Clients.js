import { Link } from "gatsby"
import React from "react"
import B1 from "../../assets/img/b1.svg"

const Clients = ({ clients }) => {
  return (
    <>
      <div className="branf__fx">
        {clients?.map((item, i) => (
          <div className="brand__single" key={i}>
            <Link to={item?.client_image?.redirect_url}>
              <img src={item?.client_image?.localFile?.publicURL} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Clients
