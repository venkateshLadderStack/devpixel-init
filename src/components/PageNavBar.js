import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import facebook from "../images/facebook-icon.svg"
import linkedin from "../images/linked-icon.svg"
import dribble from "../images/insta-icon.svg"

const PageNavBar = props => {
  return (
    <header className={`trans-bg ${props.headerClass}`}>
      <div className="wrap">
        <div className="row">
          <div className="col-2">
            <Link to="/" className="block">
              <StaticQuery
                query={graphql`
                  query HeaderQuery {
                    allWp {
                      nodes {
                        acfOptionsOptionsPage {
                          optionsPage {
                            header {
                              sourceUrl
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
                `}
                render={data => (
                  <img
                    src={
                      data?.allWp?.nodes[0]?.acfOptionsOptionsPage?.optionsPage
                        ?.header?.localFile?.publicURL
                    }
                    alt="DevPixel"
                    className="img-fluids logo"
                  />
                )}
              />
            </Link>
          </div>

          <div className="col-6 ">
            <nav>
              <Link to="/about" activeClassName="active">
                Company
              </Link>

              <Link to="/salesforce" activeClassName="active">
                Salesforce
              </Link>
              <Link to="/ux" activeClassName="active">
                UX strategy
              </Link>
            </nav>
          </div>
          <div className="col-4 text-right">
            <ul className="socil-icon">
              <li>
                <a
                  href="https://www.facebook.com/wearedevpixel/"
                  target="_blank"
                >
                  <img src={facebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/wearedevpixel/"
                  target="_blank"
                >
                  <img src={linkedin} />
                </a>
              </li>
              <li>
                <a>
                  <img src={dribble} />
                </a>
              </li>
            </ul>
            <Link to="/contact" className="us" activeClassName="active">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageNavBar
