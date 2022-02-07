import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"

import PageFooter from "../components/PageFooter"

import styled from "styled-components"
import JobCard from "../components/JobCard"
import Navbar from "../components/Navbar"

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
  const contactPage = data?.allWpPage?.nodes[0]
  const contactLeftImage =
    contactPage?.contactPage?.contactImage?.leftImage?.localFile?.publicURL
  const contactRightImage =
    contactPage?.contactPage?.contactImage?.rightImage?.localFile?.publicURL
  const contactHeading =
    contactPage?.contactPage?.contactHeading?.contactHeading
  const metaTag = contactPage?.contactPage?.contactHeading?.metaTag
  const contactHeadingImage =
    contactPage?.contactPage?.contactHeading?.contactHeadingImage?.localFile
      ?.publicURL
  const contactSubHeading = contactPage?.contactPage?.contactDetails?.heading
  const contactLocationIcon =
    contactPage?.contactPage?.contactDetails?.location?.locationIcon?.localFile
      ?.publicURL
  const contactTelephoneIcon =
    contactPage?.contactPage?.contactDetails?.telephone?.telephoneIcon
      ?.localFile?.publicURL
  const contactEmailIcon =
    contactPage?.contactPage?.contactDetails?.email?.emailIcon?.localFile
      ?.publicURL
  const contactEmailText =
    contactPage?.contactPage?.contactDetails?.email?.emailText
  const contactLocationText =
    contactPage?.contactPage?.contactDetails?.location?.locationText
  const contactTelephoneText =
    contactPage?.contactPage?.contactDetails?.telephone?.telephoneText

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metaTag}</title>
        {/* <meta
          name="description"
          content={
            props?.data?.allWpPage?.nodes[0]?.yoast_json_ld[0]
              ?.wordpress__graph[1]?.description
          }
        /> */}
      </Helmet>
      <Navbar bg="#eaeaea" />
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
                alt=""
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
                  {data?.allWpJob?.nodes?.map(job => {
                    return (
                      <Link to={`/jobs/${job?.slug}`}>
                        <JobCard
                          title={job?.title}
                          jobType={job?.jobs?.jobType}
                          key={job?.id}
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
    allWpJob {
      nodes {
        jobs {
          jobType
        }
        title
        slug
        id
      }
    }
    allWpPage(filter: { slug: { in: "contact" } }) {
      nodes {
        id
        contactPage {
          contactDetails {
            email {
              emailText
              emailIcon {
                localFile {
                  publicURL
                }
              }
            }
            heading
            location {
              locationText
              locationIcon {
                localFile {
                  publicURL
                }
              }
            }
            telephone {
              telephoneText
              telephoneIcon {
                localFile {
                  publicURL
                }
              }
            }
          }
          contactHeading {
            contactHeading
            metaTag
            contactHeadingImage {
              localFile {
                publicURL
              }
            }
          }
          contactImage {
            leftImage {
              localFile {
                publicURL
              }
            }
            rightImage {
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
