import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import $ from "jquery"

import Slider from "react-slick"

import PageFooter from "../components/PageFooter"
import { graphql } from "gatsby"
import PrevArrow from "../images/prev.svg"
import NextArrow from "../images/next.svg"

import styled from "styled-components"
import Newheader from "../components/Navbar"

const Heading = styled.h2`
  @media (max-width: 500px) {
    font-size: 20px !important;
  }
  @media (max-width: 900px) {
    font-size: 30px;
  }
`

const UX = props => {
  const uxPageContent = props?.data?.allWpPage?.nodes[0]?.uxPageOptions
  const uxPageHeading = uxPageContent?.uxPageHeading?.heading
  const metaTitle = uxPageContent?.uxPageHeading?.metaTag
  const uxPageHeadingImage = uxPageContent?.uxPageHeading?.image?.localFile
  const uxPageSubHeading = uxPageContent?.uxPageHeading?.sub_content
  const verticalSLiderHeading = uxPageContent?.uxPageVerticalSlider?.heading
  const firstVerticalSliderHeader =
    uxPageContent?.uxPageVerticalSlider?.firstSlide?.heading
  const firstVerticalSliderImage =
    uxPageContent?.uxPageVerticalSlider?.firstSlide?.image?.localFile
  const secondtVerticalSliderHeader =
    uxPageContent?.uxPageVerticalSlider?.secondSlide?.heading
  const secondVerticalSliderImage =
    uxPageContent?.uxPageVerticalSlider?.secondSlide?.image?.localFile
  const thirdVerticalSliderHeader =
    uxPageContent?.uxPageVerticalSlider?.thirdSlide?.heading
  const thirdVerticalSliderImage =
    uxPageContent?.uxPageVerticalSlider?.thirdSlide?.image?.localFile
  const imageBelowVerticalSlider =
    uxPageContent?.uxImageBelowVerticalSlider?.localFile
  const mainSliderHeading = uxPageContent?.uxMainSlider?.heading
  const mainSliderImages = uxPageContent?.uxMainSlider?.slides

  useEffect(() => {
    const changeDot = () => {
      const screenwht = $(window).height()
      const scrollValue = $(window).scrollTop()
      if ($(".uxsec2").length || $(".uxsec3").length) {
        const heightSec2 =
          $(".uxsec2").offset().top && $(".uxsec2").offset().top
        const heightSec3 =
          $(".uxsec3").offset().top && $(".uxsec3").offset().top

        if (scrollValue < heightSec2 - screenwht / 2) {
          $(".uxsidenav a").not(".uxdot1").removeClass("active")
          $(".uxdot1").addClass("active")
        } else if (scrollValue < heightSec3 - screenwht / 2) {
          $(".uxsidenav a").not(".uxdot2").removeClass("active")
          $(".uxdot2").addClass("active")
        } else {
          $(".uxsidenav a").not(".uxdot3").removeClass("active")
          $(".uxdot3").addClass("active")
        }
      }
    }
    $(window).on("scroll", changeDot)
  }, [])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <img className={className} src={NextArrow} onClick={onClick} alt="" />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <img className={className} src={PrevArrow} onClick={onClick} alt="" />
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metaTitle}</title>
        {/* <meta
          name="description"
          content={
            props?.data?.allWpPage?.nodes[0]?.yoast_json_ld[0]
              ?.wordpress__graph[1]?.description
          }
        /> */}
      </Helmet>
      <Newheader />
      <div id="home-banner" className="ux-head"></div>
      <section className="ux-full">
        <section className="ux1 pt-150">
          <div className="wrap">
            <div className="row">
              <div className="col-12 col-md-6 pt-5">
                <Heading className="mb-2">{uxPageHeading}</Heading>

                <p className="para18 mt-3 force-guy">{uxPageSubHeading}</p>
              </div>
              <div className="col-12 col-md-6  text-center">
                <img
                  src={uxPageHeadingImage?.publicURL}
                  alt=""
                  className="img-fluid manux3"
                />
                <img
                  src={uxPageHeadingImage?.publicURL}
                  alt=""
                  className="img-fluid manux8"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="ux2 pt-150">
          <div className="wrap">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="custom-sticky pr-4">
                  <div className="uxsidenav">
                    <Heading>{verticalSLiderHeading}</Heading>
                    <a className="uxdot1" id="uxec1" href="#uxone">
                      <span></span>
                      {firstVerticalSliderHeader}
                    </a>
                    <a className="uxdot2" id="uxec2" href="#uxtwo">
                      <span></span>
                      {secondtVerticalSliderHeader}
                    </a>
                    <a className="uxdot3" id="uxec3" href="#uxthree">
                      <span></span>
                      {thirdVerticalSliderHeader}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="mt-3">
                  <div className="uxsec1 set" id="uxone">
                    <h5>{firstVerticalSliderHeader}</h5>

                    <img
                      src={firstVerticalSliderImage?.publicURL}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="uxsec2 set" id="uxtwo">
                    <h5>{secondtVerticalSliderHeader}</h5>
                    <img
                      src={secondVerticalSliderImage?.publicURL}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="uxsec3 set" id="uxthree">
                    <h5>{thirdVerticalSliderHeader}</h5>
                    <img
                      src={thirdVerticalSliderImage?.publicURL}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="ux3">
        <div className="wrap">
          <div className="row align-items-center">
            <div className="col-12 col-md-12  text-center">
              <div className="col-12 col-md-12  text-center">
                <img
                  src={imageBelowVerticalSlider?.publicURL}
                  alt=""
                  className="img-fluid manux1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ux4 py-100 bg-white">
        <div className="wrap">
          <div className="row">
            <div className="col-12 col-md-9 text-center slide">
              <Heading className="">{mainSliderHeading}</Heading>
              <div className="container">
                <Slider {...settings}>
                  {mainSliderImages?.map((slide, key) => {
                    return (
                      <div key={key}>
                        <img
                          src={slide?.file?.localFile?.publicURL}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  )
}

export default UX

export const uxQuery = graphql`
  query UxQuery {
    allWpPage(filter: { slug: { in: "ux" } }) {
      nodes {
        id
        uxPageOptions {
          uxImageBelowVerticalSlider {
            localFile {
              name
              publicURL
            }
          }
          uxMainSlider {
            heading
            slides {
              file {
                localFile {
                  name
                  publicURL
                }
              }
            }
          }
          uxPageHeading {
            heading
            metaTag
            subContent
            image {
              localFile {
                name
                publicURL
              }
            }
          }
          uxPageVerticalSlider {
            heading
            firstSlide {
              heading
              image {
                localFile {
                  name
                  publicURL
                }
              }
            }
            secondSlide {
              heading
              image {
                localFile {
                  name
                  publicURL
                }
              }
            }
            thirdSlide {
              heading
              image {
                localFile {
                  name
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`
