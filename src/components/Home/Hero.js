import React from "react"
import styled from "styled-components"
import useWindowSize from "../../../hooks/useWindowSize"

const Hero = ({ acf }) => {
  const { width } = useWindowSize()

  return (
    <>
      <div
        className={`hero__area ${width < 768 && "hero__mobile"}`}
        style={{
          backgroundImage: `url(${
            (width > 768 &&
              acf?.hero?.backgroundImageMain?.localFile?.publicURL) ||
            (width < 768 &&
              acf?.hero?.mobileBackgroundImage?.localFile?.publicURL)
          })`,
        }}
      >
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__wrap">
                <div
                  className="hero__content"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <a href="#">{acf?.hero?.sub_heading}</a>
                  <h4>{acf?.hero?.heading}</h4>
                  <p
                    dangerouslySetInnerHTML={{ __html: acf?.hero?.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

const MobileBottomImage = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0px;

    img {
      object-fit: cover;
      height: 270px;
    }
  }
`

export default Hero
