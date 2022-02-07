import React from "react"
import useWindowSize from "../../../hooks/useWindowSize"

const Communication = ({ communication }) => {
  const { width } = useWindowSize()

  return (
    <>
      <div
        className={`above__area ${width < 767 && "avobe--aera--res"}`}
        style={{
          backgroundImage: `url(${
            (width > 767 &&
              communication?.backgroundImage?.localFile?.publicURL) ||
            communication?.backgroundImage_mobile?.localFile?.publicURL
          })`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="above__wrap">
                <div
                  className="above__content"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="3000"
                >
                  <h4>
                    {communication?.subHeading}
                    <br />
                    <span>{communication?.heading}</span>
                  </h4>
                  <p>
                    {communication?.description1} <br />
                    <br />
                    <span>{communication?.description2}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Communication
