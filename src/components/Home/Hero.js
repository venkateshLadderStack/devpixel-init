import React from "react"
import useWindowSize from "../../../hooks/useWindowSize"

const Hero = ({ hero }) => {
  const { width } = useWindowSize()

  return (
    <>
      <div
        className={`hero__area ${width < 768 && "hero__mobile"}`}
        style={{
          backgroundImage: `url(${
            width > 768
              ? hero?.background_image_main?.localFile?.publicURL
              : hero?.mobile_background_image?.localFile?.publicURL
          })`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__wrap">
                <div className="hero__content">
                  <a href="#">{hero?.sub_heading}</a>
                  <h4>{hero?.heading}</h4>
                  <p dangerouslySetInnerHTML={{ __html: hero?.description }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
