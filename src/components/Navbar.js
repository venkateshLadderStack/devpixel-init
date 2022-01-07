import React, { useEffect, useState } from "react"
import Bars from "../assets/img/bar.svg"
import useWindowSize from "../../hooks/useWindowSize"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Newheader = ({ bg, home }) => {
  const [mobNav, setMobNav] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allWordpressAcfOptions {
        nodes {
          options {
            header {
              localFile {
                name
                publicURL
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div class={`offcanva ${mobNav && "active"}`}>
        <div class={`offcanva__menu`}>
          <ul>
            <li>
              <Link
                activeStyle={{
                  color: "#ffb11c",
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{
                  color: "#ffb11c",
                }}
                to="/about"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{
                  color: "#ffb11c",
                }}
                to="/salesforce"
              >
                Salesforce
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{
                  color: "#ffb11c",
                }}
                to="/ux"
              >
                UX Strategy
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{
                  color: "#ffb11c",
                }}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a href="https://www.facebook.com/wearedevpixel/" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/wearedevpixel/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            {/* <li>
              <a href="#">Dribbble</a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className={`overlay ${mobNav && "active"}`}></div>

      <HeaderWrapper className="header__area" bg={bg} home={home}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hedaer__wrap">
                <div className="header__fx">
                  <div className="header__lf">
                    <div className="header__logo">
                      <Link to="/">
                        <img
                          src={
                            data.allWordpressAcfOptions.nodes[0].options.header
                              .localFile.publicURL
                          }
                          alt=""
                          className="logo_style"
                        />
                      </Link>
                    </div>
                    <div className="header__menu">
                      <ul>
                        <li>
                          <Link
                            to="/about"
                            activeStyle={{
                              borderBottom: "3px solid #1f3e53",
                            }}
                          >
                            Company
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/salesforce"
                            activeStyle={{
                              borderBottom: "3px solid #1f3e53",
                            }}
                          >
                            Salesforce
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ux"
                            className="nav_-link"
                            activeStyle={{
                              borderBottom: "3px solid #1f3e53",
                            }}
                          >
                            UX Strategy
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/contact">Approach</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="header__ri">
                    <div className="headr__icn">
                      <a href="https://www.facebook.com/wearedevpixel/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/wearedevpixel/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      {/* <a href="#">
                        <i className="fas fa-basketball-ball"></i>
                      </a> */}
                    </div>
                    <div className="header__btn">
                      <Link to="/contact">Contact Us</Link>
                    </div>
                  </div>
                  <div
                    className={`header__bar ${mobNav && "active"}`}
                    onClick={() => setMobNav(true)}
                  >
                    <a href="#">
                      <img src={Bars} alt="" />
                    </a>
                  </div>
                  <div
                    className={`cross ${mobNav && "active"}`}
                    onClick={() => setMobNav(false)}
                  >
                    <a href="#">
                      <i className="fal fa-times"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  )
}

const HeaderWrapper = styled.div`
  position: ${props => (props.home ? "absolute" : "unset")};
  background-color: ${props => props.bg || "transparent"};

  @media screen and (max-width: 767px) {
    height: 56px;
  }
`

export default Newheader
