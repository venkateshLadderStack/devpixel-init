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
            width > 767 && communication?.background_image?.localFile?.publicURL
          })`,
        }}
      >
        {width < 767 && (
          <div
            className="above--res--bg"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="3000"
            style={{
              backgroundImage: `url(${communication?.background_image_mobile?.localFile?.publicURL})`,
              backgroundPosition: "-8px 113%",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}

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
                    {communication?.sub_heading}
                    <br />
                    <span>{communication?.heading}</span>
                  </h4>
                  <p>
                    {communication?.description_1} <br />
                    <br />
                    <span>{communication?.description_2}</span>
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
