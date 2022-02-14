import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const MobileHeader = props => {
  return (
    <header
      className={`rmenu ${props.transparent ? "" : "rmenuabout"} ${
        props.name ? props.name : "rmenuabout"
      }`}
    >
      <div className="container">
        <div className="logoicon">
          <StaticQuery
            query={graphql`
              query MobileHeader {
                allWp {
                  nodes {
                    acfOptionsOptionsPage {
                      optionsPage {
                        header {
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
              <Link to="/">
                <img
                  src={
                    data?.allWp?.nodes[0]?.acfOptionsOptionsPage?.optionsPage
                      ?.header?.localFile?.publicURL
                  }
                  alt="DevPixel"
                  className="img-fluids logo"
                />
              </Link>
            )}
          />
        </div>

        <input
          className="hamburger-button"
          type="checkbox"
          id="hamburger-button"
        />
        <label for="hamburger-button">
          <div></div>
        </label>

        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName="active">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/salesforce" activeClassName="active">
                  Salesforce
                </Link>
              </li>
              <li>
                <Link to="/ux" activeClassName="active">
                  UX strategy
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">
                  Contact Us
                </Link>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <a
                  href="https://www.facebook.com/wearedevpixel/"
                  target="_blank"
                >
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
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
