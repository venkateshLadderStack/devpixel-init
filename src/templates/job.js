import React from "react"
import "./job.scss"
import logo from "../images/logo.svg"
import PageFooter from "../components/PageFooter"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const JobDescriptionWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img,
  ul {
    margin-top: 20px;
    }
  }
`

const Job = ({ data }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${data?.wpJob?.title} | Devpixel`}</title>
      </Helmet>
      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-fl">
                <div className="header-logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sale-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>{data?.wpJob?.title}</h3>
                <span>{data?.wpJob?.jobs?.jobType}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <JobDescriptionWrapper
                dangerouslySetInnerHTML={{
                  __html: data?.wpJob?.content,
                }}
              />
              <div className="sale-last-text">
                <p>
                  To apply for this position, please send your latest resume to
                  &nbsp;
                  <a href="hr@devpixel.com">hr@devpixel.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </React.Fragment>
  )
}

export default Job

export const jobQuery = graphql`
  query JobPage($id: String!) {
    wpJob(id: { eq: $id }) {
      jobs {
        jobType
      }

      title
      content
    }
  }
`
