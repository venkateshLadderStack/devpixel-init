import React from "react"
import { Helmet } from "react-helmet"

import PageFooter from "../components/PageFooter"
import { graphql } from "gatsby"
import AboutList from "../components/AboutList"
import TeamCard from "../components/TeamCard"
import Navbar from "../components/Navbar"

const About = props => {
  const aboutPage = props?.data?.allWpPage?.edges[0]?.node?.aboutPage
  const aboutPageHeading = aboutPage?.aboutHeading?.pageHeading
  const metaTitle = aboutPage?.aboutHeading?.metaTag
  const aboutPageSubHeading = aboutPage?.aboutHeading?.pageHeadingContent
  const aboutPageImage =
    aboutPage?.aboutHeading?.pageHeadingImage?.localFile?.publicURL
  const aboutPageList = aboutPage?.listComponent
  const aboutPageMainContentHeading = aboutPage?.aboutContent?.contentHeading
  const aboutPageMainContentSub = aboutPage?.aboutContent?.contentSub
  const leftImages = aboutPage?.leftImages
  const rightImages = aboutPage?.rightImages
  const teamMembers = aboutPage?.teamMembers

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metaTitle}</title>
        {/* <meta
          name="description"
          content={
            props.data?.allWpPage?.edges[0]?.node?.yoast_json_ld[0]
              ?.wordpress__graph[1]?.description
          }
        /> */}
      </Helmet>
      <Navbar bg={"#eaeaea"} />
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
                {aboutPageList?.map((list, key) => {
                  return <AboutList key={key} list={list} />
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-100 bg-white">
          <div className="wrap">
            <div className="row">
              <div className="col-12 col-md-6 life">
                <h1 className="mb-2 my-4 pl-md-5">
                  {aboutPageMainContentHeading}
                </h1>
                <p className="para18 pl-md-5">{aboutPageMainContentSub}</p>
                {leftImages?.map((image, key) => {
                  if (key % 2 === 0) {
                    return (
                      <img
                        key={key}
                        src={image?.imageFile?.localFile?.publicURL}
                        alt=""
                        className="img-fluid my-4 pl-md-5"
                      />
                    )
                  }
                  return (
                    <img
                      key={key}
                      src={image?.imageFile?.localFile?.publicURL}
                      alt=""
                      className="img-fluid my-4"
                    />
                  )
                })}
              </div>
              <div className="col-12 col-md-6 pl-md-5">
                {rightImages?.map((image, key) => {
                  return (
                    <img
                      key={key}
                      src={image?.imageFile?.localFile?.publicURL}
                      alt=""
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
            {teamMembers?.map((member, key) => {
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
    allWpPage(filter: { slug: { in: "about" } }) {
      edges {
        node {
          id
          aboutPage {
            teamMembers {
              name
              title
              fieldGroupName
              image {
                localFile {
                  publicURL
                  childImageSharp {
                    fixed(quality: 90) {
                      src
                    }
                  }
                }
              }
            }
            rightImages {
              fieldGroupName
              imageFile {
                localFile {
                  publicURL
                  name
                }
              }
            }
            listComponent {
              colorOption
              fieldGroupName
              heading
              number
              subHeading
            }
            leftImages {
              fieldGroupName
              imageFile {
                localFile {
                  publicURL
                  name
                }
              }
            }
            aboutContent {
              contentHeading
              contentSub
            }
            aboutHeading {
              metaTag
              pageHeading
              pageHeadingContent
              pageHeadingImage {
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
