import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import $ from "jquery"
import "aos/dist/aos.css"
import { TimelineMax, TweenMax, Linear, Power1, gsap } from "gsap/all"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

import FooterFormContact from "../components/FooterContactForm"

import BackToTopItem from "../components/BackTopTop"
import Brand from "../components/Home/Brand"
import Communication from "../components/Home/Communication"
import Navbar from "../components/Navbar"
import Hero from "../components/Home/Hero"

const Home = props => {
  const homePageNew = props?.data?.wpPage?.homePageNew
  const homePageContent = props?.data?.allWpPage?.nodes[0]?.homePageNew

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
        <title>{homePageContent?.homePageHead?.metaTag}</title>
        {/* <meta
          name="description"
          content={
            props?.data?.allWpPage?.nodes[0]?.yoast_json_ld[0]
              ?.wordpress__graph[1]?.description
          }
        /> */}
      </Helmet>
      <Navbar home={true} />
      <Hero acf={homePageNew} />
      <div id="maincontain" style={{ backgroundColor: "#1e3f53" }}>
        <Brand acf={homePageNew} />

        <Communication communication={homePageNew?.communication} />
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
                            homePageNew?.stages?.stage1?.image?.localFile
                              ?.publicURL
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
                        <h4>{homePageNew?.stages?.stage1?.heading}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: homePageNew?.stages?.stage1?.description,
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
                          homePageNew?.stages?.stage1?.preview1?.localFile
                            ?.publicURL
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
                          homePageNew?.stages?.stage1?.preview2?.localFile
                            ?.publicURL
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
                          homePageNew?.stages?.stage1?.preview3?.localFile
                            ?.publicURL
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
                            homePageNew?.stages?.stage2?.image?.localFile
                              ?.publicURL
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
                        <h4>{homePageNew?.stages?.stage2?.heading}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: homePageNew?.stages?.stage2?.description,
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
                            homePageNew?.stages?.stage2?.image?.localFile
                              ?.publicURL
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
                          homePageNew?.stages?.stage2?.preview1?.localFile
                            ?.publicURL
                        }
                        alt=""
                      />
                    </div>
                    <div className="delevar__single--img delevari--mid">
                      <img
                        src={
                          homePageNew?.stages?.stage2?.preview2?.localFile
                            ?.publicURL
                        }
                        alt=""
                      />
                    </div>
                    <div className="delevar__single--img delevari--lft">
                      <img
                        src={
                          homePageNew?.stages?.stage2?.preview3?.localFile
                            ?.publicURL
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
                        homePageNew?.stages?.stage2?.previewMobile?.localFile
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
                            homePageNew?.stages?.stage3?.image?.localFile
                              ?.publicURL
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
                        <h4>{homePageNew?.stages?.stage3?.heading}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: homePageNew?.stages?.stage3?.description,
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
        <footer className="fancy-footer">
          <h4>
            You can count on us. <br /> You can count on DevPixel.
          </h4>
        </footer>
        <FooterFormContact />
      </div>
      <BackToTopItem />
    </>
  )
}

export default Home

export const HomeQuery = graphql`
  query HomeQuery {
    wpPage(slug: { eq: "home-new" }) {
      id
      homePageNew {
        stages {
          stage1 {
            heading
            description
            image {
              sourceUrl
              localFile {
                publicURL
              }
            }
            preview1 {
              sourceUrl
              localFile {
                publicURL
              }
            }
            preview2 {
              sourceUrl
              localFile {
                publicURL
              }
            }
            preview3 {
              sourceUrl
              localFile {
                publicURL
              }
            }
          }
          stage2 {
            description
            heading
            image {
              sourceUrl
              localFile {
                publicURL
              }
            }
            preview1 {
              sourceUrl
              localFile {
                publicURL
              }
            }
            preview2 {
              sourceUrl
              localFile {
                publicURL
              }
            }
            preview3 {
              sourceUrl
              localFile {
                publicURL
              }
            }
            previewMobile {
              sourceUrl
              localFile {
                publicURL
              }
            }
          }
          stage3 {
            heading
            description
            image {
              sourceUrl
              localFile {
                publicURL
              }
            }
          }
        }
        hero {
          description
          heading
          subHeading
          backgroundImage2 {
            sourceUrl
            localFile {
              publicURL
              childImageSharp {
                fluid(
                  quality: 90
                  webpQuality: 90
                  jpegQuality: 90
                  pngQuality: 90
                ) {
                  src
                }
              }
            }
          }
          backgroundImageMain {
            sourceUrl
            localFile {
              publicURL
              childImageSharp {
                fluid(
                  quality: 90
                  webpQuality: 90
                  jpegQuality: 90
                  pngQuality: 90
                ) {
                  src
                }
              }
            }
          }
          mobileBackgroundImage {
            sourceUrl
            localFile {
              publicURL
              childImageSharp {
                fluid(
                  quality: 90
                  webpQuality: 90
                  jpegQuality: 90
                  pngQuality: 90
                ) {
                  src
                }
              }
            }
          }
        }
        clients {
          heading
          clients {
            redirectUrl
            fieldGroupName
            clientImage {
              sourceUrl
              localFile {
                publicURL
              }
            }
          }
        }
        testimonials {
          heading
          subHeading
          testimonial {
            authorDetail
            quote
            image {
              sourceUrl
              localFile {
                publicURL
              }
            }
          }
        }
        communication {
          description1
          description2
          fieldGroupName
          heading
          subHeading
          backgroundImage {
            sourceUrl
            localFile {
              publicURL
            }
          }
          backgroundImageMobile {
            sourceUrl
            localFile {
              publicURL
            }
          }
        }
        footerHero {
          fieldGroupName
          heading
          backgroundImage {
            sourceUrl
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
