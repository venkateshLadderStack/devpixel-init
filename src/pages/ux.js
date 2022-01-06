import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import $ from "jquery"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import MobileHeader from "../components/MobileHeader"
import PageFooter from "../components/PageFooter"
import PageNavBar from "../components/PageNavBar"
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
  const uxPageContent = props.data.allWordpressPage.nodes[0].acf
  const uxPageHeading = uxPageContent.ux_page_heading.heading
  const metaTitle = uxPageContent.ux_page_heading.meta_tag
  const uxPageHeadingImage = uxPageContent.ux_page_heading.image.localFile
  const uxPageSubHeading = uxPageContent.ux_page_heading.sub_content
  const verticalSLiderHeading = uxPageContent.ux_page_vertical_slider.heading
  const firstVerticalSliderHeader =
    uxPageContent.ux_page_vertical_slider.first_slide.heading
  const firstVerticalSliderImage =
    uxPageContent.ux_page_vertical_slider.first_slide.image.localFile
  const secondtVerticalSliderHeader =
    uxPageContent.ux_page_vertical_slider.second_slide.heading
  const secondVerticalSliderImage =
    uxPageContent.ux_page_vertical_slider.second_slide.image.localFile
  const thirdVerticalSliderHeader =
    uxPageContent.ux_page_vertical_slider.third_slide.heading
  const thirdVerticalSliderImage =
    uxPageContent.ux_page_vertical_slider.third_slide.image.localFile
  const imageBelowVerticalSlider =
    uxPageContent.ux_image_below_vertical_slider.localFile
  const mainSliderHeading = uxPageContent.ux_main_slider.heading
  const mainSliderImages = uxPageContent.ux_main_slider.slides

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
    return <img className={className} src={NextArrow} onClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return <img className={className} src={PrevArrow} onClick={onClick} />
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
        <meta
          name="description"
          content={
            props.data.allWordpressPage.nodes[0].yoast_json_ld[0]
              .wordpress__graph[1].description
          }
        />
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
                  src={uxPageHeadingImage.publicURL}
                  alt={uxPageHeadingImage.name}
                  className="img-fluid manux3"
                />
                <img
                  src={uxPageHeadingImage.publicURL}
                  alt={uxPageHeadingImage.name}
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
                      src={firstVerticalSliderImage.publicURL}
                      alt={firstVerticalSliderImage.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="uxsec2 set" id="uxtwo">
                    <h5>{secondtVerticalSliderHeader}</h5>
                    <img
                      src={secondVerticalSliderImage.publicURL}
                      alt={secondVerticalSliderImage.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="uxsec3 set" id="uxthree">
                    <h5>{thirdVerticalSliderHeader}</h5>
                    <img
                      src={thirdVerticalSliderImage.publicURL}
                      alt={thirdVerticalSliderImage.name}
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
                  src={imageBelowVerticalSlider.publicURL}
                  alt={imageBelowVerticalSlider.name}
                  className="img-fluid manux1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ux4 my-100">
        <div className="wrap">
          <div className="row">
            <div className="col-12 col-md-9 text-center slide">
              <Heading className="">{mainSliderHeading}</Heading>
              <div className="container">
                <Slider {...settings}>
                  {mainSliderImages.map((slide, key) => {
                    return (
                      <div key={key}>
                        <img
                          src={slide.file.localFile.publicURL}
                          alt={slide.file.localFile.name}
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
    allWordpressPage(filter: { slug: { in: "ux" } }) {
      nodes {
        yoast_json_ld {
          wordpress__graph {
            name
            url
            description
          }
        }
        acf {
          ux_main_slider {
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
          ux_image_below_vertical_slider {
            localFile {
              name
              publicURL
            }
          }
          ux_page_vertical_slider {
            heading
            third_slide {
              heading
              image {
                localFile {
                  name
                  publicURL
                }
              }
            }
            second_slide {
              heading
              image {
                localFile {
                  name
                  publicURL
                }
              }
            }
            first_slide {
              heading
              image {
                localFile {
                  name
                  publicURL
                }
              }
            }
          }
          ux_page_heading {
            heading
            sub_content
            meta_tag
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
`
