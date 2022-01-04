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
import WhyBox from "../components/WhyBox"
import FooterFormContact from "../components/FooterContactForm"
import TestimonialBox from "../components/TestimonialBox"

import DesktopImage from "../images/new.jpg"
import MobileImage from "../images/mobile-parallax.jpg"
import BackToTopItem from "../components/BackTopTop"

const CompanyLogoHeader = styled.h2`
  font-size: 16px !important;
`

const Parallax = styled.section`
  background-image: url(${props => props.img});
  @media (max-width: 500px) {
    background-image: url(${props => props.mobileImg});
  }
`

const BaseImage = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`

const Home = props => {
  const { data } = props
  const homePageContent = props.data.allWordpressPage.nodes[0].acf
  const companyHeading = homePageContent.home_page_head
  const companyLogos = homePageContent.company_logos.logo
  const companyTestimonials = homePageContent.testimonials.testimonial
  const companyPromoBoxes = homePageContent.promos.promo
  const companyApproach = homePageContent.our_approach
  const companyDiscoverDesign = homePageContent.discover_design

  const pathPrepare = $el => {
    var lineLength = $el[0].getTotalLength()
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
        <title>{homePageContent.home_page_head.meta_tag}</title>
        <meta
          name="description"
          content={
            props.data.allWordpressPage.nodes[0].yoast_json_ld[0]
              .wordpress__graph[1].description
          }
        />
      </Helmet>
      <MobileHeader transparent name="transparent" />
      <PageNavBar headerClass="mainpageheader vhead topmenu" />
      <section className="effect">
        <Parallax
          className="module parallax"
          img={DesktopImage}
          mobileImg={MobileImage}
        />
        {/* <section className=" parallax-1"></section> */}
      </section>
      <BaseImage className="base">
        <img
          src={
            data.allWordpressPage.nodes[0].acf.parallex_images.second_layer
              .localFile.publicURL
          }
        />
      </BaseImage>
      <div id="maincontain">
        <section className="bg-dark-grey darkreid" id="darn-good">
          <div className="wrap">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 text-md-left text-center">
                <h3
                  className="stunning"
                  dangerouslySetInnerHTML={{
                    __html: homePageContent.home_page_head.sub_heading,
                  }}
                ></h3>
                <div className="yellowline d-none d-md-block"></div>
                <div className="yellowline m-auto d-block d-md-none"></div>
                <p>{homePageContent.home_page_head.sub_content}</p>
                <p>
                  <a href="#home-services" className="how">
                    Explore how
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="we-done position-relative d-none d-md-block">
                  <img
                    src={
                      homePageContent.home_page_head.sales_force_circle_image
                        .third_layer.localFile.publicURL
                    }
                    alt={
                      homePageContent.home_page_head.sales_force_circle_image
                        .third_layer.localFile.name
                    }
                    id="three"
                    className="img-fluids"
                  />
                  <img
                    src={
                      homePageContent.home_page_head.sales_force_circle_image
                        .second_layer.localFile.publicURL
                    }
                    alt={
                      homePageContent.home_page_head.sales_force_circle_image
                        .third_layer.localFile.name
                    }
                    id="two"
                    className="img-fluids"
                  />
                  <img
                    src={
                      homePageContent.home_page_head.sales_force_circle_image
                        .first_layer.localFile.publicURL
                    }
                    alt={
                      homePageContent.home_page_head.sales_force_circle_image
                        .first_layer.name
                    }
                    id="one"
                    className="img-fluids"
                  />
                </div>
                <img
                  src={
                    homePageContent.home_page_head.salesforce_circle_mobile
                      .localFile.publicURL
                  }
                  className="px-3 img-fluid d-block d-md-none"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="ideals">
          <div className="wrap">
            <div className="row">
              <div className="col-12">
                <h2 className="our">{homePageContent.why_devpixel.heading}</h2>
              </div>
            </div>
            <div className="row handle-border">
              <WhyBox
                content={homePageContent.why_devpixel.why_box[0]}
                col={true}
              />
              <WhyBox
                content={homePageContent.why_devpixel.why_box[1]}
                col={true}
              />
              <div className="col-12 col-md-4">
                <WhyBox
                  content={homePageContent.why_devpixel.why_box[2]}
                  name="newboxd4"
                />
                <WhyBox
                  content={homePageContent.why_devpixel.why_box[3]}
                  name="newboxd4"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="home-services" className="openseen"></section>
        <section className="bg-dark-grey darkreid" id="darn-blue">
          <div className="wrap">
            <div className="row">
              <div className="col-12 col-md-12 text-center remarkable">
                <h3 className="how-do">{companyApproach.heading}</h3>
                <h2>{companyApproach.sub_heading}</h2>
              </div>
            </div>
          </div>

          <div className="designmenu" id="designmenu">
            <div className="wrap">
              <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="sub">
                    <li>
                      <a className="d1" id="ec1" href="#s1">
                        DISCOVER
                      </a>
                    </li>
                    <li>
                      <a className="d2" id="ec2" href="#s2">
                        DESIGN
                      </a>
                    </li>
                    <li>
                      <a className="d3" id="ec3" href="#s3">
                        DEVELOP
                      </a>
                    </li>
                    <li>
                      <a className="d4" id="ec4" href="#s4">
                        DELIVER
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="appr newbg1">
            <div className="wrap">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 text-center view-do2">
                  <ul className="lineflow lineflow1">
                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item sc1"
                      id="s1"
                    >
                      <div className="period">
                        <img
                          src={
                            data.allWordpressPage.nodes[0].acf.discover_design
                              .logo_icon.localFile.publicURL
                          }
                          alt="devpixel"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item">
                      <div data-aos="fade-in" className="left-do2 aos-item">
                        <div className="why">
                          <div className="greenline hideline"></div>
                          <h4>{companyDiscoverDesign.discovery_heading}</h4>
                          <p>{companyDiscoverDesign.discovery_sub_content}</p>
                        </div>
                      </div>
                      <div data-aos="fade-in" className="center-do2 aos-item">
                        <div id="line_1"></div>
                        <div className="svg1 none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1"
                            height="160"
                            viewBox="0 0 1 160"
                          >
                            <path
                              id="Path_9387"
                              data-name="Path 9387"
                              d="M-3006.019,531.686v160"
                              transform="translate(3006.519 -531.686)"
                              fill="none"
                              stroke="#ffb11c"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>

                        <div className="greenline hideline"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do2 aos-item"
                      ></div>
                    </li>

                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item aos-init aos-animate"
                    >
                      <div
                        data-aos="fade-in"
                        className="left-do9 aos-item aos-init aos-animate"
                      >
                        <div className="effectv">
                          <img
                            src={
                              data.allWordpressPage.nodes[0].acf.discover_design
                                .discovery_sub_heading_image.localFile.publicURL
                            }
                            className="img-fluid"
                          />
                          <div className="greenline hideline"></div>
                        </div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="center-do9 aos-item aos-init aos-animate"
                      >
                        <div className="static4">
                          <h4>
                            {
                              data.allWordpressPage.nodes[0].acf.discover_design
                                .discovery_sub_heading
                            }
                          </h4>
                          <p>
                            {
                              data.allWordpressPage.nodes[0].acf.discover_design
                                .discovery_sub_heading_content
                            }
                          </p>
                          <div className="greenline hideline"></div>
                        </div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do9 aos-item none aos-init aos-animate"
                      >
                        <div id="line_3"></div>
                        <div className="svg3 none"></div>

                        <div className="greenline hideline"></div>
                      </div>
                    </li>

                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item topnewpart aos-init aos-animate"
                    >
                      <div
                        className="left-do2 aos-item aos-init aos-animate"
                        data-aos="fade-in"
                      >
                        <div className="term">
                          <img
                            src={
                              data.allWordpressPage.nodes[0].acf.discover_design
                                .circle_image.localFile.publicURL
                            }
                            className="img-fluid"
                            alt="circle-image"
                          />
                        </div>
                      </div>
                      <div className="center-do2">
                        <div id="line_5"></div>
                        <div className="none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1"
                            height="450"
                            viewBox="0 0 1 450"
                          >
                            <path
                              id="Path_9315"
                              data-name="Path 9315"
                              d="M480.622-76.968v450"
                              transform="translate(-480.122 76.968)"
                              fill="none"
                              stroke="#feb11c"
                              strokeWidth="1"
                              style={{
                                strokeDasharray: "450px",
                                strokeDashoffset: "0px",
                                strokeDashoffset: "rgb(245, 193, 19)",
                              }}
                            ></path>
                          </svg>
                        </div>
                        <div className="greenline hideline"></div>
                      </div>
                      <div
                        className="right-do2 aos-item aos-init aos-animate"
                        data-aos="fade-in"
                      >
                        <TestimonialBox testimonial={companyTestimonials[2]} />
                        <div className="greenline hideline"></div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item aos-init"
                    >
                      <div
                        data-aos="fade-in"
                        className="left-do5 aos-item none aos-init"
                      >
                        <div className="apply3"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do3 aos-item aos-init"
                      >
                        <div className="apply none"></div>
                        <h4 className="py-4 py-md-0">Sample Deliverables</h4>
                      </div>
                    </li>
                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item none aos-init"
                    >
                      <div
                        data-aos="fade-in"
                        className="left-do2 aos-item none aos-init"
                      ></div>
                      <div
                        data-aos="fade-in"
                        className="center-do2 aos-item aos-init"
                      >
                        <div className="greenline3 greenlinesmall1"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do2 aos-item none aos-init"
                      >
                        <div className="build"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="appr1 ">
            <div className="wrap">
              <div className="row align-items-center">
                <div className="col-12 col-md-12">
                  <ul className="lineflow divspax">
                    <li data-aos="fade-in" className="linebyline aos-item">
                      <div className="period">
                        <div className="what whato">
                          <ul>
                            <li>
                              <div className="greenline hideline"></div>
                              <div className="low">
                                <img
                                  src={
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[0].image.localFile.publicURL
                                  }
                                  className="img-fluid"
                                />
                                <h2>
                                  {
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[0].heading
                                  }
                                </h2>
                                <p className="over">
                                  {
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[0].content
                                  }
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="greenline hideline"></div>
                              <div className="low high">
                                <img
                                  src={
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[1].image.localFile.publicURL
                                  }
                                  className="img-fluid"
                                />
                                <h2>
                                  {
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[1].heading
                                  }
                                </h2>
                                <p className="over">
                                  {
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[1].content
                                  }
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="greenline hideline"></div>
                              <div className="low">
                                <img
                                  src={
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[2].image.localFile.publicURL
                                  }
                                  className="img-fluid"
                                />
                                <h2>
                                  {
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[2].heading
                                  }
                                </h2>
                                <p className="over">
                                  {
                                    data.allWordpressPage.nodes[0].acf
                                      .discover_design.sample_deliverables
                                      .deliverable[2].content
                                  }
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="appr newbg2">
            <div className="wrap">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 text-center view-do2">
                  <ul className="lineflow">
                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item sc2"
                      id="s2"
                    >
                      <div
                        data-aos="fade-in"
                        className="left-do2 aos-item none"
                      ></div>
                      <div
                        data-aos="fade-in"
                        id="line_6"
                        className="center-do2 aos-item none"
                      >
                        <div className=" none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1"
                            height="150"
                            viewBox="0 0 1 150"
                          >
                            <path
                              id="Path_line6"
                              data-name="Path 9399"
                              d="M-2916.623,2026v150"
                              transform="translate(2917.123 -2026)"
                              fill="none"
                              stroke="#ffb11c"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                      </div>
                      <div data-aos="fade-in" className="right-do2 aos-item">
                        <div className="why">
                          <h4 className="mt-3 mt-md-0">
                            {companyDiscoverDesign.design_heading}
                          </h4>
                          <p>{companyDiscoverDesign.design_sub_content}</p>
                        </div>
                        <div className="greenline hideline"></div>
                      </div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item none">
                      <div
                        data-aos="fade-in"
                        id="line_7"
                        className="left-do5 left-do8 aos-item"
                      >
                        <div className="svg5 none"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do5 right-do8 aos-item none"
                      ></div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item">
                      <div
                        data-aos="fade-in"
                        id="line_8"
                        className="left-do10 aos-item none"
                      >
                        <div className="svg6 none"></div>
                      </div>
                      <div data-aos="fade-in" className="center-do10 aos-item">
                        <div className="static1">
                          <p>
                            {companyDiscoverDesign.design_second_sub_content}
                          </p>
                        </div>
                        <div className="greenline hideline"></div>
                      </div>
                      <div data-aos="fade-in" className="right-do10 aos-item">
                        <div className="effectv neweffectv">
                          <img
                            src={
                              companyDiscoverDesign.image.localFile.publicURL
                            }
                            alt={companyDiscoverDesign.image.localFile.name}
                            className="img-fluid"
                          />
                          <div className="greenline hideline"></div>
                        </div>
                      </div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item none">
                      <div
                        data-aos="fade-in"
                        id="line_9"
                        className="left-do5 left-do8 aos-item"
                      >
                        <div className="svg7 none"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do5 right-do8 aos-item"
                      ></div>
                    </li>

                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item topnewpart"
                    >
                      <div className="left-do2 aos-item" data-aos="fade-in">
                        <TestimonialBox testimonial={companyTestimonials[0]} />
                      </div>
                      <div className="center-do2" id="line_10">
                        <div className="svg8 none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1"
                            height="450"
                            viewBox="0 0 1 450"
                          >
                            <path
                              id="Path_9397"
                              data-name="Path 9403"
                              d="M-2883.9,2630.678v450"
                              transform="translate(2884.404 -2630.678)"
                              fill="none"
                              stroke="#ffb11c"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                        <div className="greenline hideline"></div>
                      </div>
                      <div className="right-do2 aos-item" data-aos="fade-in">
                        <div className="term testmv3">
                          <img
                            src={
                              companyDiscoverDesign.second_image.localFile
                                .publicURL
                            }
                            alt={
                              companyDiscoverDesign.second_image.localFile.name
                            }
                            className="img-fluid"
                          />
                        </div>
                        <div className="greenline hideline"></div>
                      </div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item">
                      <div data-aos="fade-in" className="left-do5 aos-item">
                        <div className="apply3 none"></div>
                        <h4>Sample Deliverables</h4>
                        <div className="greenline hideline"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do3 aos-item none"
                      >
                        <div className="apply"></div>
                      </div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item none">
                      <div
                        data-aos="fade-in"
                        className="left-do2 aos-item none"
                      ></div>
                      <div data-aos="fade-in" className="center-do2 aos-item">
                        <div className="greenline3 greenlinesmall1"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do2 aos-item none"
                      >
                        <div className="build"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="appr1">
            <div className="wrap">
              <div className="row align-items-center">
                <div className="col-12 col-md-12">
                  <ul className="lineflow divspax">
                    <li data-aos="fade-in" className="linebyline aos-item">
                      <div className="period">
                        <div className="what whato1">
                          <div className="promos">
                            {companyPromoBoxes.map((promo, key) => {
                              return <Promo content={promo} key={key} />
                            })}
                            <div className="promos1">
                              {companyPromoBoxes.map((promo, key) => {
                                return <SmallPromo content={promo} key={key} />
                              })}
                            </div>

                            <img
                              src={
                                data.allWordpressPage.nodes[0].acf
                                  .discover_design.sample_deliverables
                                  .arrow_line.localFile.publicURL
                              }
                              className="img-fluid"
                            />
                            <h4>Design Evolution</h4>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="appr newbg3">
            <div className="wrap">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 text-center view-do1">
                  <ul className="lineflow">
                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item sc3"
                      id="s3"
                    >
                      <div data-aos="fade-in" className="left-do2 aos-item">
                        <div className="why why2">
                          <div className="greenline hideline"></div>
                          <h4>{homePageContent.develop.develop_heading}</h4>
                          <p>{homePageContent.develop.develop_sub_content}</p>
                        </div>
                      </div>
                      <div
                        data-aos="fade-in"
                        id="line_11"
                        className="center-do2 aos-item"
                      >
                        <div className="none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1"
                            height="200"
                            viewBox="0 0 1 200"
                          >
                            <path
                              id="Path_9398"
                              data-name="Path 9404"
                              d="M-2970.441,3568v200"
                              transform="translate(2970.941 -3568)"
                              fill="none"
                              stroke="#ffb11c"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                        <div className="greenline hideline"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        className="right-do2 aos-item"
                      ></div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item none">
                      <div
                        data-aos="fade-in"
                        className="left-do13 aos-item"
                      ></div>
                      <div
                        data-aos="fade-in"
                        id="line_12"
                        className="right-do13 aos-item"
                      >
                        <div className="svg8 none"></div>
                      </div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item">
                      <div data-aos="fade-in" className="left-do14 aos-item">
                        <div className="effectv">
                          <img
                            src={
                              homePageContent.develop.image.localFile.publicURL
                            }
                            alt={homePageContent.develop.image.localFile.name}
                            className="img-fluid"
                          />
                          <div className="greenline hideline"></div>
                        </div>
                      </div>
                      <div data-aos="fade-in" className="center-do14 aos-item">
                        <div className="static">
                          <p>
                            {homePageContent.develop.develop_second_sub_content}
                          </p>
                          <div className="greenline hideline"></div>
                        </div>
                      </div>
                      <div
                        data-aos="fade-in"
                        id="line_13"
                        className="right-do14 aos-item none"
                      >
                        <div className="svg9 none"></div>
                      </div>
                    </li>
                    <li data-aos="fade-in" className="linebyline aos-item none">
                      <div
                        data-aos="fade-in"
                        className="left-do13 aos-item"
                      ></div>
                      <div
                        data-aos="fade-in"
                        id="line_14"
                        className="right-do13 aos-item none"
                      >
                        <div className="svg10 none"></div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-in"
                      className="linebyline aos-item topnewpart"
                    >
                      <div className="left-do2 aos-item" data-aos="fade-in">
                        <div className="term testmv2">
                          <img
                            src={
                              homePageContent.develop.second_image.localFile
                                .publicURL
                            }
                            alt={
                              homePageContent.develop.second_image.localFile
                                .name
                            }
                            className="img-fluid"
                          />
                          <div className="greenline hideline"></div>
                        </div>
                      </div>
                      <div className="center-do2 none" id="line_15">
                        <div className="-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1"
                            height="450"
                            viewBox="0 0 1 450"
                          >
                            <path
                              id="Path_9402"
                              data-name="Path 9363"
                              d="M480.622-76.968v450"
                              transform="translate(-480.122 76.968)"
                              fill="none"
                              stroke="#f5c113"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="right-do2 aos-item" data-aos="fade-in">
                        <TestimonialBox testimonial={companyTestimonials[1]} />
                        <div className="greenline hideline"></div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-in"
                      className="linebyline company aos-item sc4"
                      id="s4"
                    >
                      <div className="period">
                        <div className="what what2">
                          <CompanyLogoHeader>
                            YOU ARE IN GOOD COMPANY
                          </CompanyLogoHeader>
                          <ul className="thumb">
                            {companyLogos.map((logo, key) => {
                              return (
                                <li key={key}>
                                  <div className="low">
                                    <img
                                      src={logo.file.localFile.publicURL}
                                      alt={logo.file.localFile.name}
                                      className="img-fluid"
                                    />
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="fancy-footer"></footer>
        <FooterFormContact />
        <BackToTopItem />
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
          parallex_images {
            first_layer {
              localFile {
                name
                publicURL
              }
            }
            second_layer {
              localFile {
                name
                publicURL
              }
            }
            mobile_layer {
              localFile {
                name
                publicURL
              }
            }
          }
          company_logos {
            logo {
              file {
                localFile {
                  name
                  publicURL
                }
              }
            }
          }
          develop {
            develop_heading
            develop_sub_content
            develop_second_sub_content
            image {
              localFile {
                name
                publicURL
              }
            }
            second_image {
              localFile {
                name
                publicURL
              }
            }
          }
          promos {
            promo {
              heading
              sub_content
              class
              image {
                localFile {
                  name
                  publicURL
                }
              }
            }
          }
          discover_design {
            logo_icon {
              localFile {
                publicURL
              }
            }
            discovery_heading
            discovery_sub_content
            discovery_sub_heading
            discovery_sub_heading_content
            discovery_sub_heading_image {
              localFile {
                publicURL
              }
            }
            circle_image {
              localFile {
                publicURL
              }
            }
            sample_deliverables {
              arrow_line {
                localFile {
                  publicURL
                }
              }
              deliverable {
                heading
                content
                image {
                  localFile {
                    publicURL
                  }
                }
              }
            }
            design_heading
            design_sub_content
            design_second_sub_content
            second_image {
              localFile {
                name
                publicURL
              }
            }
            image {
              localFile {
                name
                publicURL
              }
            }
          }
          testimonials {
            testimonial {
              quote
              author_detail
              image {
                localFile {
                  name
                  publicURL
                }
              }
            }
          }
          our_approach {
            heading
            sub_heading
          }
          why_devpixel {
            heading
            why_box {
              heading
              sub_heading
              icon {
                localFile {
                  name
                  publicURL
                }
              }
            }
          }
          home_page_head {
            heading
            meta_tag
            sub_heading
            sub_content
            salesforce_circle_mobile {
              localFile {
                publicURL
              }
            }
            sales_force_circle_image {
              third_layer {
                localFile {
                  name
                  publicURL
                }
              }
              second_layer {
                localFile {
                  name
                  publicURL
                }
              }
              first_layer {
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
