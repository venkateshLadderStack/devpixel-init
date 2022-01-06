import React, { useEffect, useState } from "react"
import Bars from "../assets/img/bar.svg"
import useWindowSize from "../../hooks/useWindowSize"
import { graphql, Link, useStaticQuery } from "gatsby"
import Logo from "../assets/img/header--logo.svg"

const Newheader = () => {
  const [mobNav, setMobNav] = useState(false)
  const { width } = useWindowSize()

  return (
    <>
      <div class={`offcanva ${mobNav && "active"}`}>
        <div class={`offcanva__menu`}>
          <ul>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Salesforce</a>
            </li>
            <li>
              <a href="#">UX Strategy</a>
            </li>
            <li>
              <a href="#">Approach</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`overlay ${mobNav && "active"}`}></div>

      <div className="header__area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hedaer__wrap">
                <div className="header__fx">
                  <div className="header__lf">
                    <div className="header__logo">
                      <a href="#">
                        <img src={Logo} alt="" />
                      </a>
                    </div>
                    <div className="header__menu">
                      <ul>
                        <li>
                          <a href="#">Company</a>
                        </li>
                        <li>
                          <a href="#">Salesforce</a>
                        </li>
                        <li>
                          <a href="#">UX Strategy</a>
                        </li>
                        <li>
                          <a href="#">Approach</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="header__ri">
                    <div className="headr__icn">
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fas fa-basketball-ball"></i>
                      </a>
                    </div>
                    <div className="header__btn">
                      <a href="#">Contact Us</a>
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
      </div>
    </>
  )
}

export default Newheader
