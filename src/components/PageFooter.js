import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import BackToTopItem from "./BackTopTop"

const PageFooter = () => {
  const date = new Date()
  return (
    <React.Fragment>
      <footer className="normal-footer ">
        <div className="wrap">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 text-white text-center pixel">
              <div className="footer-bit text-center">
                <StaticQuery
                  query={graphql`
                    query FooterLogo {
                      allWp {
                        nodes {
                          acfOptionsOptionsPage {
                            optionsPage {
                              footerLogo {
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
                        data?.allWp?.nodes[0]?.acfOptionsOptionsPage
                          ?.optionsPage?.footerLogo?.localFile?.publicURL
                      }
                      alt="dev pixel"
                      width="60"
                      className="img-fluid"
                    />
                  )}
                />
                <ul>
                  <li>
                    <Link to="/about">Company</Link>
                  </li>
                  <li>
                    <Link to="/salesforce">Salesforce</Link>
                  </li>
                  <li>
                    <Link to="/ux">UX strategy</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
                <p className="copy">
                  &copy; {date.getFullYear()} DevPixel Pvt Ltd. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BackToTopItem />
    </React.Fragment>
  )
}

export default PageFooter
