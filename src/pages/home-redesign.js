import React from "react"
import Navbar from "../components/Navbar"
import HeroBG from "../assets/img/hero---bg.png"
import MHeroBG from "../assets/img/heromobile--bg.png"
import Bgbottom from "../assets/img/hero--bg-b.png"
import AboveBG from "../assets/img/above--bg.png"
import MAboveBG from "../assets/img/abve__mobile.png"
import Bussiness from "../assets/img/business.svg"
import Sample from "../assets/img/sample1.svg"
import Sample2 from "../assets/img/sample2.svg"
import Sample3 from "../assets/img/sample3.svg"
import Mb from "../assets/img/mbl.png"
import Control from "../assets/img/control.png"
import Res from "../assets/img/res.svg"
import FooterSV from "../assets/img/footer--sv.svg"
import D1 from "../assets/img/d1.png"
import D2 from "../assets/img/d2.png"
import D3 from "../assets/img/d3.png"

import Testimonials from "../components/Home/Testimonials"
import Clients from "../components/Home/Clients"
import FooterFormContact from "../components/FooterContactForm"
import BackToTopItem from "../components/BackTopTop"
import Footerform from "../components/Home/FooterForm"
import Hero from "../components/Home/Hero"
import Communication from "../components/Home/Communication"
import Brand from "../components/Home/Brand"

const HomeRedesign = ({ data }) => {
  const acf = data?.wordpressPage?.acf
  console.log(data?.wordpressPage?.acf, "DATA")
  return (
    <>
      <Navbar />
      <Hero hero={acf?.hero} />
      <Brand acf={acf} />
      <Communication communication={acf?.communication} />

      <div className="business--area p-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="business__wrap">
                <div className="business__fx">
                  <div className="business__lf">
                    <div className="business--img">
                      <img
                        src={acf?.stage_1?.main_image?.localFile?.publicURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="business__ri">
                    <div className="business__ct">
                      <h4>{acf?.stage_1?.heading}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: acf?.stage_1?.description,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="sample__wrap">
                <div className="sample__title">
                  <h4>Sample Deliverables</h4>
                </div>
                <div className="sample__fx">
                  <div className="sample__single--box">
                    <img
                      src={acf?.stage_1?.stage_1_sample_1?.localFile?.publicURL}
                      alt=""
                    />
                  </div>
                  <div className="sample__single--box">
                    <img
                      src={acf?.stage_1?.stage_1_sample_2?.localFile?.publicURL}
                      alt=""
                    />
                  </div>
                  <div className="sample__single--box">
                    <img
                      src={acf?.stage_1?.stage_1_sample_3?.localFile?.publicURL}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="learning">
                <div className="business__fx">
                  <div className="business__lf learning--img-res">
                    <div className="business--img">
                      <img
                        src={
                          acf?.stage_2?.stage_2_main_image?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="business__ri">
                    <div className="business__ct">
                      <h4>{acf?.stage_2?.heading}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: acf?.stage_2?.description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="business__lf learning--img">
                    <div className="business--img">
                      <img
                        src={
                          acf?.stage_2?.stage_2_main_image?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="delevar__area p-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="delevar__wrap">
                <div className="sample__title">
                  <h4>Sample Deliverables</h4>
                </div>
                <div className="delevar__image--wrap">
                  <div className="delevar__single--img">
                    <img
                      src={acf?.stage_2?.stage_2_sample_1?.localFile?.publicURL}
                      alt=""
                    />
                  </div>
                  <div className="delevar__single--img delevari--mid">
                    <img
                      src={acf?.stage_2?.stage_2_sample_2?.localFile?.publicURL}
                      alt=""
                    />
                  </div>
                  <div className="delevar__single--img delevari--lft">
                    <img
                      src={acf?.stage_2?.stage_2_sample_3?.localFile?.publicURL}
                      alt=""
                    />
                  </div>
                </div>
                <div className="delevary__mobil">
                  <img
                    src={acf?.stage_2?.stage_2_mobile?.localFile?.publicURL}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="control__wrap">
                <div className="business__fx">
                  <div className="business__lf">
                    <div className="business--img">
                      <img
                        src={
                          acf?.stage_3?.stage_3_main_image?.localFile?.publicURL
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="business__ri">
                    <div className="business__ct">
                      <h4>{acf?.stage_3?.heading}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: acf?.stage_3?.description,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="footer---top-tx">
                  <h4>You can count on us. You can count on DevPixel.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="foooter__area">
        <div>
          <img
            className="footer_img_bg"
            src={acf?.footer_hero?.background_image?.localFile?.publicURL}
            alt=""
          />
        </div>
        <div
          className="footer--top-ct"
          dangerouslySetInnerHTML={{ __html: acf?.footer_hero?.heading }}
        />
        {/* <div class="footer__bg">
          <img
            src={acf?.footer_hero?.background_image?.localFile?.publicURL}
            alt=""
          />
        </div> */}
        <Footerform />
      </div>
    </>
  )
}

export default HomeRedesign

export const HomeNewQuery = graphql`
  query HomeNewQuery {
    wordpressPage(slug: { eq: "home-new" }) {
      title
      slug
      acf {
        hero {
          sub_heading
          heading
          description
          background_image_main {
            source_url
            localFile {
              publicURL
            }
          }
          background_image_2 {
            source_url
            localFile {
              publicURL
            }
          }
          mobile_background_image {
            source_url
            localFile {
              publicURL
            }
          }
        }
        clients {
          heading
          clients {
            client_image {
              source_url
              localFile {
                publicURL
              }
            }
            redirect_url
          }
        }
        communication {
          sub_heading
          heading
          description_1
          description_2
          background_image {
            source_url
            localFile {
              publicURL
            }
          }
          background_image_mobile {
            source_url
            localFile {
              publicURL
            }
          }
        }
        footer_hero {
          heading
          background_image {
            source_url
            localFile {
              publicURL
            }
          }
        }
        testimonials {
          sub_heading
          heading
          testimonial {
            quote
            author_detail
            image {
              source_url
              localFile {
                publicURL
              }
            }
          }
        }
        stage_1 {
          heading
          description
          main_image {
            source_url
            localFile {
              publicURL
            }
          }
          stage_1_sample_1 {
            source_url
            localFile {
              publicURL
            }
          }
          stage_1_sample_2 {
            source_url
            localFile {
              publicURL
            }
          }
          stage_1_sample_3 {
            source_url
            localFile {
              publicURL
            }
          }
        }
        stage_2 {
          heading
          description
          stage_2_main_image {
            source_url
            localFile {
              publicURL
            }
          }
          stage_2_sample_1 {
            source_url
            localFile {
              publicURL
            }
          }
          stage_2_sample_2 {
            source_url
            localFile {
              publicURL
            }
          }
          stage_2_sample_3 {
            source_url
            localFile {
              publicURL
            }
          }
          stage_2_mobile {
            localFile {
              publicURL
            }
          }
        }
        stage_3 {
          heading
          description
          stage_3_main_image {
            source_url
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
