import React from "react"
import { Helmet } from "react-helmet"
import PageFooter from "../components/PageFooter"
import SalesForcePageBox from "../components/SalesForcePageBox"
import { graphql } from "gatsby"

import styled from "styled-components"
import Navbar from "../components/Navbar"

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
  const salesforceContent = data?.allWpPage?.nodes[0]?.salesforcePageOptions
  const salesforcePageHeading = salesforceContent?.pageHeading?.heading
  const metatitle = salesforceContent?.pageHeading?.meta_tag
  const salesforcePageImage = salesforceContent?.pageHeading?.image?.localFile
  const salesforceMainContentHeading = salesforceContent?.mainContent?.heading
  const salesforceMainContentBoxes =
    salesforceContent?.mainContent?.salesforceColorBox
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metatitle}</title>
        {/* <meta
          name="description"
          content={
            props?.data?.allWpPage?.nodes[0]?.yoast_json_ld[0]
              ?.wordpress__graph[1]?.description
          }
        /> */}
      </Helmet>
      <Navbar bg="#c7dff0" home={false} />
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
                  src={salesforcePageImage?.publicURL}
                  alt=""
                  className="img-fluid manux3"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="py-100 bg-white saleforce3">
        <div className="wrap">
          <div className="row">
            <div className="col-12 col-md-12 text-center">
              <Heading className="mb-2">{salesforceMainContentHeading}</Heading>
            </div>
          </div>

          <div className="row mt-2">
            <SalesForcePageBox
              content={
                salesforceMainContentBoxes?.length > 0 &&
                salesforceMainContentBoxes[0]
              }
            />
            <SalesForcePageBox
              content={
                salesforceMainContentBoxes?.length > 0 &&
                salesforceMainContentBoxes[1]
              }
            />
          </div>
          <div className="row mt-2">
            <SalesForcePageBox
              content={
                salesforceMainContentBoxes?.length > 0 &&
                salesforceMainContentBoxes[2]
              }
            />
            <SalesForcePageBox
              content={
                salesforceMainContentBoxes?.length > 0 &&
                salesforceMainContentBoxes[3]
              }
            />
          </div>
        </div>
      </section>
      {/* <section class="start-area">
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
      </section> */}
      <PageFooter />
    </>
  )
}

export default Salesforce

export const salesForceQuery = graphql`
  query salesforceQuery {
    allWpPage(filter: { slug: { in: "salesforce" } }) {
      nodes {
        id
        salesforcePageOptions {
          mainContent {
            heading
            salesforceColorBox {
              colorOptions
              fieldGroupName
              heading
              subContent
              icon {
                sourceUrl
                localFile {
                  publicURL
                }
              }
            }
          }
          pageHeading {
            fieldGroupName
            heading
            metaTag
            image {
              sourceUrl
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
