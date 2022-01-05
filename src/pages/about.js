import React from "react"
import { Helmet } from "react-helmet"
import MobileHeader from "../components/MobileHeader"

import PageFooter from "../components/PageFooter"
import PageNavBar from "../components/PageNavBar"
import { graphql } from "gatsby"
import AboutList from "../components/AboutList"
import TeamCard from "../components/TeamCard"

const About = props => {
  const aboutPage = props.data.allWordpressPage.edges[0].node.acf
  const aboutPageHeading = aboutPage.about_heading.page_heading
  const metaTitle = aboutPage.about_heading.meta_tag
  const aboutPageSubHeading = aboutPage.about_heading.page_heading_content
  const aboutPageImage =
    aboutPage.about_heading.page_heading_image.localFile.publicURL
  const aboutPageList = aboutPage.list_component
  const aboutPageMainContentHeading = aboutPage.about_content.content_heading
  const aboutPageMainContentSub = aboutPage.about_content.content_sub
  const leftImages = aboutPage.left_images
  const rightImages = aboutPage.right_images
  const teamMembers = aboutPage.team_members

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={
            props.data.allWordpressPage.edges[0].node.yoast_json_ld[0]
              .wordpress__graph[1].description
          }
        />
      </Helmet>
      <MobileHeader />
      <PageNavBar headerClass="company-head" />
      <div id="home-banner" className="company-bg"></div>
      <section className="newdev">
        <div id="two-guys" className="wrap">
          <img
            src={aboutPageImage}
            alt="two guys working"
            className="img-fluid"
          />
        </div>
        <section className="bg-dark-grey" id="darn-good1">
          <div className="wrap">
            <div className="row align-items-center pt-150">
              <div className="col-12 col-md-7">
                <h2 className="text-white mb-4 twoguy">{aboutPageHeading}</h2>

                <div
                  dangerouslySetInnerHTML={{ __html: aboutPageSubHeading }}
                />
              </div>
              <div className="col-12 offset-md-1 col-md-4">
                {aboutPageList.map((list, key) => {
                  return <AboutList key={key} list={list} />
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="my-100">
          <div className="wrap">
            <div className="row">
              <div className="col-12 col-md-6 life">
                <h1 className="mb-2 my-4 pl-md-5">
                  {aboutPageMainContentHeading}
                </h1>
                <p className="para18 pl-md-5">{aboutPageMainContentSub}</p>
                {leftImages.map((image, key) => {
                  if (key % 2 === 0) {
                    return (
                      <img
                        key={key}
                        src={image.image_file.localFile.publicURL}
                        alt={image.image_file.localFile.name}
                        className="img-fluid my-4 pl-md-5"
                      />
                    )
                  }
                  return (
                    <img
                      key={key}
                      src={image?.image_file?.localFile?.publicURL}
                      alt={image?.image_file?.localFile?.name}
                      className="img-fluid my-4"
                    />
                  )
                })}
              </div>
              <div className="col-12 col-md-6 pl-md-5">
                {rightImages.map((image, key) => {
                  return (
                    <img
                      key={key}
                      src={image.image_file.localFile.publicURL}
                      alt={image.image_file.localFile.name}
                      className="img-fluid my-4"
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-title">
                <h4>Meet the Team</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {teamMembers.map((member, key) => {
              return (
                <TeamCard
                  title={member?.title}
                  name={member?.name}
                  img={member?.image?.localFile?.childImageSharp?.fixed.src}
                  key={key}
                />
              )
            })}
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default About

export const aboutQuery = graphql`
  query aboutQuery {
    allWordpressPage(filter: { slug: { in: "about" } }) {
      edges {
        node {
          id
          yoast_json_ld {
            wordpress__graph {
              name
              url
              description
            }
          }
          acf {
            team_members {
              name
              title
              image {
                localFile {
                  childImageSharp {
                    fixed(quality: 90) {
                      src
                    }
                  }
                }
              }
            }
            right_images {
              image_file {
                localFile {
                  publicURL
                  name
                }
              }
            }
            left_images {
              image_file {
                localFile {
                  publicURL
                  name
                }
              }
            }
            about_content {
              content_heading
              content_sub
            }
            list_component {
              number
              sub_heading
              heading
              color_option
            }
            about_heading {
              page_heading
              page_heading_content
              meta_tag
              page_heading_image {
                localFile {
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
