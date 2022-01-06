import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"

import MobileHeader from "../components/MobileHeader"
import PageFooter from "../components/PageFooter"
import PageNavBar from "../components/PageNavBar"
import { Img } from "gatsby-image"

import styled from "styled-components"
import JobCard from "../components/JobCard"
import Newheader from "../components/Navbar"

const Heading = styled.h1`
  @media (max-width: 500px) {
    font-size: 20px !important;
  }
  @media (max-width: 900px) {
    font-size: 30px;
  }
`

const Contact = props => {
  const { data } = props
  const contactPage = data.allWordpressPage.nodes[0]
  const contactLeftImage =
    contactPage.acf.contact_image.left_image.localFile.publicURL
  const contactRightImage =
    contactPage.acf.contact_image.right_image.localFile.publicURL
  const contactHeading = contactPage.acf.contact_heading.contact_heading
  const metaTag = contactPage.acf.contact_heading.meta_tag
  const contactHeadingImage =
    contactPage.acf.contact_heading.contact_heading_image.localFile.publicURL
  const contactSubHeading = contactPage.acf.contact_details.heading
  const contactLocationIcon =
    contactPage.acf.contact_details.location.location_icon.localFile.publicURL
  const contactTelephoneIcon =
    contactPage.acf.contact_details.telephone.telephone_icon.localFile.publicURL
  const contactEmailIcon =
    contactPage.acf.contact_details.email.email_icon.localFile.publicURL
  const contactEmailText = contactPage.acf.contact_details.email.email_text
  const contactLocationText =
    contactPage.acf.contact_details.location.location_text
  const contactTelephoneText =
    contactPage.acf.contact_details.telephone.telephone_text

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metaTag}</title>
        <meta
          name="description"
          content={
            props.data.allWordpressPage.nodes[0].yoast_json_ld[0]
              .wordpress__graph[1].description
          }
        />
      </Helmet>
      <Newheader />
      <div id="home-banner" className="contact-bg">
        <div className="wrap">
          <div className="row align-items-center">
            <div className="col-12  col-md-8 mb-5">
              <Heading>{contactHeading}</Heading>
            </div>
            <div className="col-12 col-md-4">
              <img
                src={contactHeadingImage}
                alt="person"
                className="img-fluid person"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="pt-5 cont2">
        <div className="wrap">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={contactLeftImage}
                alt="contact us"
                className="img-fluid my-5"
              />
            </div>
            <div className="col-12 col-md-6">
              <img
                src={contactRightImage}
                alt="contact us"
                className="img-fluid my-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-100 cont1">
        <div className="wrap">
          <div className="row">
            <div className="col-12">
              <Heading className="mb-5">{contactSubHeading}</Heading>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4">
              <img src={contactEmailIcon} alt="email" className="mb-4" />
              <div
                className="text-dark"
                dangerouslySetInnerHTML={{ __html: contactEmailText }}
              />
            </div>

            <div className="col-12 offset-md-1 col-md-3">
              <img src={contactTelephoneIcon} alt="email" className="mb-4" />
              <div
                className="text-dark"
                dangerouslySetInnerHTML={{ __html: contactTelephoneText }}
              />
            </div>

            <div className="col-12 offset-md-1 col-md-3">
              <img src={contactLocationIcon} alt="email" className="mb-4" />
              <div
                className="text-dark"
                dangerouslySetInnerHTML={{ __html: contactLocationText }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area">
        <div className="wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrap">
                <div className="contact-heading">
                  <h4>We’re hiring</h4>
                  <p>
                    One Design Company is a research-driven design and
                    development studio. For over a decade, we’ve explored the
                    intersection of experience and technology—where powerful
                    brands come to life. We’ve called Chicago our home and
                    continue to nurture strong roots in the local art, design
                    and development communities. We work on all sorts of
                    projects for organizations and businesses from the small,
                    local, and boutique to some of the largest companies (and
                    brands) in the world.
                  </p>
                </div>
                <div className="job-wrapper">
                  {data.allWordpressWpJob.nodes.map(job => {
                    return (
                      <Link to={`/jobs/${job.slug}`}>
                        <JobCard
                          title={job.title}
                          jobType={job.acf.job_type}
                          key={job.id}
                        />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageFooter />
    </div>
  )
}

export default Contact

export const contactQuery = graphql`
  query MyQuery {
    allWordpressWpJob {
      nodes {
        acf {
          job_type
        }

        id
        title
        slug
      }
    }
    allWordpressPage(filter: { slug: { in: "contact" } }) {
      nodes {
        yoast_json_ld {
          wordpress__graph {
            name
            url
            description
          }
        }
        acf {
          contact_heading {
            contact_heading
            meta_tag
            contact_heading_image {
              localFile {
                publicURL
              }
            }
          }
          contact_details {
            heading
            email {
              email_text
              email_icon {
                localFile {
                  publicURL
                }
              }
            }
            location {
              location_text
              location_icon {
                localFile {
                  publicURL
                }
              }
            }
            telephone {
              telephone_text
              telephone_icon {
                localFile {
                  publicURL
                }
              }
            }
          }
          contact_image {
            left_image {
              localFile {
                publicURL
              }
            }
            right_image {
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
