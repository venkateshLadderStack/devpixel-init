import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import $ from "jquery"
import "aos/dist/aos.css"
import { TimelineMax, TweenMax, Linear, Power1, gsap } from "gsap/all"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
import styled from "styled-components"

import MobileHeader from "../components/MobileHeader"
import PageNavBar from "../components/PageNavBar"
import Promo from "../components/Promo"
import SmallPromo from "../components/SmallPromo"
import FooterFormContact from "../components/FooterContactForm"
import TestimonialBox from "../components/TestimonialBox"

import BackToTopItem from "../components/BackTopTop"
import Brand from "../components/Home/Brand"
import Communication from "../components/Home/Communication"
import Navbar from "../components/Navbar"
import Hero from "../components/Home/Hero"

const CompanyLogoHeader = styled.h2`
  font-size: 16px !important;
`

const Parallax = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  margin-bottom: -1px;

  @media (max-width: 500px) {
    background-image: url(${props => props.mobileImg});
  }
`

const BaseImage = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`

const HeroText = styled.div`
  background: transparent;
  position: absolute;
  top: 20vh;

  @media (max-width: 500px) {
    top: 10vh;
  }
`

const Home = props => {
  const { data } = props
  const acf = props?.data?.wordpressPage?.acf
  const homePageContent = props.data.allWordpressPage.nodes[0].acf

  const pathPrepare = $el => {
    var lineLength = $el[0]?.getTotalLength()
    $el.css("stroke-dasharray", lineLength)
    $el.css("stroke-dashoffset", lineLength)
  }

  const dispelParallax = () => {
    $("#nonparallax").css("display", "block")
    $("#parallax").css("display", "none")
  }

  const startSite = () => {
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i)
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: function () {
        return (
          navigator.userAgent.match(/IEMobile/i) ||
          navigator.userAgent.match(/WPDesktop/i)
        )
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        )
      },
    }

    if (isMobile.any()) {
      dispelParallax()
    }
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const drawLine = (el, id) => {
        if (typeof window !== `undefined`) {
          const Magic = require("scrollmagic")
          // const ScrollMagicPluginGsap = require("scrollmagic-plugin-gsap")

          ScrollMagicPluginGsap(Magic, gsap)
          let controller = new Magic.Controller()
          let tween = new TimelineMax()
          pathPrepare(el)
          tween.add(
            TweenMax.to(el, 1, {
              strokeDashoffset: 0,
              ease: Power1.easeInOut,
            })
          )
          tween.add(
            TweenMax.to(el, 0.9, {
              stroke: "#F5C113",
              strokeDashoffset: 0,
              ease: Linear.easeNone,
            }),
            0
          )
          new Magic.Scene({
            triggerElement: id,
            duration: 30,
            tweenChanges: true,
          })
            .setTween(tween)
            .addTo(controller)
        }
      }
      drawLine($("path#Path_9387"), "#designmenu")
      drawLine($("path#Path_line6"), "#line_6")
      drawLine($("path#Path_9397"), "#line_10")
      drawLine($("path#Path_9315"), "#line_5")
      drawLine($("path#Path_9402"), "#line_15")
      drawLine($("path#Path_9398"), "#line_11")
    }
  })

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init({
        duration: 2000,
      })
      startSite()
      function changeDot() {
        if ($(window)) {
          const screenwht = $(window).height()
          const scrollValue = $(window).scrollTop()
          if ($(".sc2").length || $(".sc3").length || $(".sc4").length) {
            const heightSec2 = $(".sc2").offset().top
            const heightSec3 = $(".sc3").offset().top
            const heightSec4 = $(".sc4").offset().top

            if (scrollValue < heightSec2 - screenwht / 2) {
              $(".sub a").not(".d1").removeClass("active")
              $(".d1").addClass("active")
            } else if (scrollValue < heightSec3 - screenwht / 2) {
              $(".sub a").not(".d2").removeClass("active")
              $(".d2").addClass("active")
            } else if (scrollValue < heightSec4 - screenwht / 2) {
              $(".sub a").not(".d3").removeClass("active")
              $(".d3").addClass("active")
            } else {
              $(".sub a").not(".d4").removeClass("active")
              $(".d4").addClass("active")
            }
          }
        }
      }

      window.addEventListener("scroll", function () {
        changeDot()
      })

      $(window).scroll(function () {
        if ($(this).scrollTop() >= 0) {
          $("#one").fadeIn(250)
        } else {
          $("#one").fadeOut(250)
        }
        if ($(this).scrollTop() >= 750) {
          $("#two").fadeIn(250)
        } else {
          $("#two").fadeOut(250)
        }
        if ($(this).scrollTop() >= 780) {
          $("#three").fadeIn(300)
        } else {
          $("#three").fadeOut(300)
        }
        if ($(this).scrollTop() >= 800) {
          $("#four").fadeIn(350)
        } else {
          $("#four").fadeOut(350)
        }

        if ($(this).scrollTop() >= 5200) {
          $(".designmenu").addClass("designmenu1")
        } else {
          $(".designmenu").removeClass("designmenu1")
        }
      })
    }
  }, [])

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      let scrollRef = 0

      window.addEventListener("scroll", function () {
        // increase value up to 10, then refresh AOS
        scrollRef <= 10 ? scrollRef++ : AOS.refresh()
      })
    }
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{homePageContent?.home_page_head?.meta_tag}</title>
        <meta
          name="description"
          content={
            props.data.allWordpressPage.nodes[0].yoast_json_ld[0]
              .wordpress__graph[1].description
          }
        />
      </Helmet>
      <Navbar />
      <Hero acf={acf} />
      <div id="maincontain" style={{ backgroundColor: "#1e3f53" }}>
        <Brand acf={acf} />

        <Communication communication={acf?.communication} />
        <div className="business--area p-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="business__wrap">
                  <div className="business__fx">
                    <div className="business__lf">
                      <div
                        className="business--img"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                      >
                        <img
                          src={
                            acf?.stages?.stage_1?.image?.localFile?.publicURL
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="business__ri"
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="3000"
                    >
                      <div className="business__ct">
                        <h4>{acf?.stages?.stage_1?.heading}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: acf?.stages?.stage_1?.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="sample__wrap">
                  <div className="sample__title">
                    <h4>Sample Deliverables</h4>
                  </div>
                  <div className="sample__fx">
                    <div
                      className="sample__single--box"
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                    >
                      <img
                        src={
                          acf?.stages?.stage_1?.preview_1?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                    <div
                      className="sample__single--box"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1100"
                    >
                      <img
                        src={
                          acf?.stages?.stage_1?.preview_2?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                    <div
                      className="sample__single--box"
                      data-aos="zoom-in"
                      data-aos-delay="150"
                      data-aos-duration="1200"
                    >
                      <img
                        src={
                          acf?.stages?.stage_1?.preview_3?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="learning">
                  <div className="business__fx">
                    <div className="business__lf learning--img-res">
                      <div
                        className="business--img"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                      >
                        <img
                          src={
                            acf?.stages?.stage_2?.image?.localFile?.publicURL
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="business__ri"
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="3000"
                    >
                      <div className="business__ct">
                        <h4>{acf?.stages?.stage_2?.heading}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: acf?.stages?.stage_2?.description,
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="business__lf learning--img"
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                    >
                      <div className="business--img">
                        <img
                          src={
                            acf?.stages?.stage_2?.image?.localFile?.publicURL
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="delevar__area p-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="delevar__wrap">
                  <div className="sample__title">
                    <h4>Sample Deliverables</h4>
                  </div>
                  <div className="delevar__image--wrap">
                    <div className="delevar__single--img">
                      <img
                        src={
                          acf?.stages?.stage_2?.preview_1?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                    <div className="delevar__single--img delevari--mid">
                      <img
                        src={
                          acf?.stages?.stage_2?.preview_2?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                    <div className="delevar__single--img delevari--lft">
                      <img
                        src={
                          acf?.stages?.stage_2?.preview_3?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="delevary__mobil"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                  >
                    <img
                      src={
                        acf?.stages?.stage_2?.preview_mobile?.localFile
                          ?.publicURL
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="control__wrap">
                  <div className="business__fx">
                    <div className="business__lf">
                      <div
                        className="business--img"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                      >
                        <img
                          src={
                            acf?.stages?.stage_3?.image?.localFile?.publicURL
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="business__ri">
                      <div
                        className="business__ct"
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="3000"
                      >
                        <h4>{acf?.stages?.stage_3?.heading}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: acf?.stages?.stage_3?.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="footer---top-tx">
                    <h4>You can count on us. You can count on DevPixel.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="fancy-footer"></footer>
        <FooterFormContact />
      </div>
    </>
  )
}

export default Home

export const HomeQuery = graphql`
  query HomeQuery {
    allWordpressPage(filter: { slug: { in: "home" } }) {
      nodes {
        yoast_json_ld {
          wordpress__graph {
            name
            url
            description
          }
        }
        acf {
          home_page_head {
            heading
            meta_tag
          }
        }
      }
    }
    wordpressPage(slug: { eq: "home-new" }) {
      acf {
        hero {
          sub_heading
          heading
          description
          background_image_main {
            source_url
            localFile {
              publicURL
            }
          }
          background_image_2 {
            source_url
            localFile {
              publicURL
            }
          }
          mobile_background_image {
            source_url
            localFile {
              publicURL
            }
          }
        }
        clients {
          heading
          clients {
            client_image {
              source_url
              localFile {
                publicURL
              }
            }
            redirect_url
          }
        }
        testimonials {
          sub_heading
          heading
          testimonial {
            quote
            author_detail
            image {
              source_url
              localFile {
                publicURL
              }
            }
          }
        }
        communication {
          sub_heading
          heading
          description_1
          description_2
          background_image {
            source_url
            localFile {
              publicURL
            }
          }
          background_image_mobile {
            source_url
            localFile {
              publicURL
            }
          }
        }
        stages {
          stage_1 {
            heading
            description
            image {
              localFile {
                publicURL
              }
            }
            preview_1 {
              localFile {
                publicURL
              }
            }
            preview_2 {
              localFile {
                publicURL
              }
            }
            preview_3 {
              localFile {
                publicURL
              }
            }
          }
          stage_3 {
            heading
            description
            image {
              localFile {
                publicURL
              }
            }
          }
          stage_2 {
            description
            heading
            image {
              localFile {
                publicURL
              }
            }
            preview_1 {
              localFile {
                publicURL
              }
            }
            preview_2 {
              localFile {
                publicURL
              }
            }
            preview_3 {
              localFile {
                publicURL
              }
            }
            preview_mobile {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`
