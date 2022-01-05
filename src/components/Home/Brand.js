import React from "react"
import Clients from "./Clients"
import Testimonials from "./Testimonials"

const Brand = ({ acf }) => {
  return (
    <>
      <div className="brand__aera">
        <img
          src={acf?.hero?.background_image_2?.localFile?.publicURL}
          alt=""
          className="hero-bg-b"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand__wrap">
                <div className="brand__title">
                  <h4>{acf?.clients?.heading}</h4>
                </div>
                <Clients clients={acf?.clients?.clients} />
                <div className="safe__hand">
                  <div className="safe__hand__title">
                    <h4>
                      {acf?.testimonials?.sub_heading}{" "}
                      <span>{acf?.testimonials?.heading}</span>
                    </h4>
                  </div>
                  <Testimonials data={acf?.testimonials?.testimonial} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brand
