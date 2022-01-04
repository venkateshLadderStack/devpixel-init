import React from "react"
import { Helmet } from "react-helmet"
import MobileHeader from "../components/MobileHeader"
import PageFooter from "../components/PageFooter"
import PageNavBar from "../components/PageNavBar"
import SalesForcePageBox from "../components/SalesForcePageBox"
import { graphql } from "gatsby"

import styled from "styled-components"

const Heading = styled.h2`
  @media (max-width: 500px) {
    font-size: 20px !important;
  }
  @media (max-width: 900px) {
    font-size: 30px;
  }
`

const Salesforce = props => {
  const isSalesforce = props.path === "/salesforce/" ? true : false
  const { data } = props
  const salesforceContent = data.allWordpressPage.nodes[0].acf
  const salesforcePageHeading = salesforceContent.page_heading.heading
  const metatitle = salesforceContent.page_heading.meta_tag
  const salesforcePageImage = salesforceContent.page_heading.image.localFile
  const salesforceMainContentHeading = salesforceContent.main_content.heading
  const salesforceMainContentBoxes =
    salesforceContent.main_content.salesforce_color_box
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metatitle}</title>
        <meta
          name="description"
          content={
            props.data.allWordpressPage.nodes[0].yoast_json_ld[0]
              .wordpress__graph[1].description
          }
        />
      </Helmet>
      <MobileHeader name="rmenusaleforce" />
      <PageNavBar headerClass="salesforce-head" />
      <div id="home-banner" className="salesforce-bg"></div>
      <section className="saleforce-full">
        <section className="ux1 pt-5 saleforce1">
          <div className="wrap">
            <div className="row ">
              <div className="col-12 col-md-6 pt-150">
                <Heading className="mb-2">{salesforcePageHeading}</Heading>
              </div>
              <div className="col-12 col-md-6  text-center">
                <img
                  src={salesforcePageImage.publicURL}
                  alt={salesforcePageImage.name}
                  className="img-fluid manux3"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="my-100 saleforce3 pt-5">
        <div className="wrap">
          <div className="row">
            <div className="col-12 col-md-12 text-center">
              <Heading className="mb-2">{salesforceMainContentHeading}</Heading>
            </div>
          </div>

          <div className="row mt-2">
            <SalesForcePageBox content={salesforceMainContentBoxes[0]} />
            <SalesForcePageBox content={salesforceMainContentBoxes[1]} />
          </div>
          <div className="row mt-2">
            <SalesForcePageBox content={salesforceMainContentBoxes[2]} />
            <SalesForcePageBox content={salesforceMainContentBoxes[3]} />
          </div>
        </div>
      </section>
      <section class="start-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="start-title">
                <h4>Tell us about your project and let’s get started!</h4>
                <p>
                  Yes, we’re interested in discussing a project for our company
                </p>
              </div>
              <div class="start-form">
                <form action="#">
                  <div class="start-form-fx">
                    <div class="start-single-form">
                      <input type="text" placeholder="Your company name" />
                    </div>
                    <div class="start-single-form">
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div class="start-single-form">
                      <input type="email" placeholder="Your email" />
                    </div>
                    <div class="single-btn">
                      <a href="#">SUBMIT</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  )
}

export default Salesforce

export const salesForceQuery = graphql`
  query salesforceQuery {
    allWordpressPage(filter: { slug: { in: "salesforce" } }) {
      nodes {
        yoast_json_ld {
          wordpress__graph {
            name
            url
            description
          }
        }
        acf {
          main_content {
            heading
            salesforce_color_box {
              heading
              sub_content
              color_options
              icon {
                localFile {
                  publicURL
                  name
                }
              }
            }
          }
          page_heading {
            image {
              localFile {
                publicURL
                name
              }
            }
            heading
            meta_tag
          }
        }
      }
    }
  }
`
