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

const HomeRedesign = () => {
  return (
    <>
      <Navbar />

      <div className="hero__area" style={{ backgroundImage: `url(${HeroBG})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__wrap">
                <div className="hero__content">
                  <a href="#">We are</a>
                  <h4> Salesforce Pathfinders</h4>
                  <p>
                    We can guide you through the Salesforce eco-system to reach
                    your goals safely,timely and visually
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero__area hero__mobile"
        style={{ backgroundImage: `url(${MHeroBG})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__wrap">
                <div className="hero__content">
                  <a href="#">We are</a>
                  <h4> Salesforce Pathfinders</h4>
                  <p>
                    We can guide you through the Salesforce eco-system to reach
                    your goals safely,timely and visually
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand__aera">
        <img src={Bgbottom} alt="" className="hero-bg-b" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand__wrap">
                <div className="brand__title">
                  <h4>Many have already entrusted us and succeeded with us</h4>
                </div>
                <Clients />

                <div className="safe__hand">
                  <div className="safe__hand__title">
                    <h4>
                      You are in <span>safe hands</span>
                    </h4>
                  </div>

                  <Testimonials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="above__area"
        style={{ backgroundImage: `url(${AboveBG})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="above__wrap">
                <div className="above__content">
                  <h4>
                    So, what elevates us above the rest?
                    <span>Communication</span>
                  </h4>
                  <p>
                    Communication is the foundation to a successful
                    collaboration and the underpinning of all projects destined
                    to succeed. There is no “Option B”. This is why we have made
                    communication with YOU central to our vision and the core of
                    everything DevPixel. <br />
                    <br />
                    <span>
                      Let us show you visually of what you can expect from us at
                      each stage of crafting an extraordinary Salesforce
                      experience for your customers.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="above__area avobe--aera--res">
        <div className="above--res--bg">
          <img src={MAboveBG} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="above__wrap">
                <div className="above__content">
                  <h4>
                    So, what elevates us above the rest?
                    <span>Communication</span>
                  </h4>
                  <p>
                    Communication is the foundation to a successful
                    collaboration and the underpinning of all projects destined
                    to succeed. There is no “Option B”. This is why we have made
                    communication with YOU central to our vision and the core of
                    everything DevPixel. <br />
                    <br />
                    <span>
                      Let us show you visually of what you can expect from us at
                      each stage of crafting an extraordinary Salesforce
                      experience for your customers.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="business--area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="business__wrap">
                <div className="business__fx">
                  <div className="business__lf">
                    <div className="business--img">
                      <img src={Bussiness} alt="" />
                    </div>
                  </div>
                  <div className="business__ri">
                    <div className="business__ct">
                      <h4>
                        <span>Stage 1:</span> Understanding your business
                      </h4>
                      <p>
                        What are you envisioning? What are your business
                        objectives? What do your customers want to see?
                      </p>
                      <p>
                        We start by developing a comprehensive understanding of
                        your business. This gives us the context within which we
                        will later identify the safest and most efficient path
                        forward for you.
                      </p>
                      <p>
                        At the same time, we will also calibrate our
                        communications to match specifically you. Presentation,
                        availability, escalation, and anything and everything
                        else that’s needed to elevate the standard “IT project
                        communication” to one that you will feel comfortable
                        with and customly YOURS.
                      </p>
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
                    <img src={Sample} alt="" />
                  </div>
                  <div className="sample__single--box">
                    <img src={Sample2} alt="" />
                  </div>
                  <div className="sample__single--box">
                    <img src={Sample3} alt="" />
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
                      <img src={Bussiness} alt="" />
                    </div>
                  </div>
                  <div className="business__ri">
                    <div className="business__ct">
                      <h4>
                        <span>Stage 2: Learning your</span> aesthetics
                      </h4>
                      <p>
                        Modern or traditional? Detailed at-a-glance or guided
                        with bite-sized information?{" "}
                      </p>
                      <p>
                        We want to get you involved right from the start and
                        learn what kind of visuals would satisfy your
                        preferences. Through fast-turnaround layout and flow
                        designs, we will drive your project swiftly from a raw
                        “cutout” to a refined solution, with your guidance and
                        approval.{" "}
                      </p>
                      <p>
                        We believe business should always come first. Show us
                        what you want to see, and we will line up the right
                        technologies that will deliver YOUR vision.
                      </p>
                    </div>
                  </div>
                  <div className="business__lf learning--img">
                    <div className="business--img">
                      <img src={Bussiness} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="delevar__area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="delevar__wrap">
                <div className="sample__title">
                  <h4>Sample Deliverables</h4>
                </div>
                <div className="delevar__image--wrap">
                  <div className="delevar__single--img">
                    <img src={D1} alt="" />
                  </div>
                  <div className="delevar__single--img delevari--mid">
                    <img src={D2} alt="" />
                  </div>
                  <div className="delevar__single--img delevari--lft">
                    <img src={D3} alt="" />
                  </div>
                </div>
                <div className="delevary__mobil">
                  <img src={Mb} alt="" />
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
                      <img src={Control} alt="" />
                    </div>
                  </div>
                  <div className="business__ri">
                    <div className="business__ct">
                      <h4>Stage 3: Keeping you in control</h4>
                      <p>
                        How is the project going? Any foreseeable challenges
                        around the corner? Are we on time and on budget?{" "}
                      </p>
                      <p>
                        We safeguard all our plans with layers of redundancy
                        that protect your project from behind the scenes and are
                        completely transparent to your budget. Periodically, we
                        will also give you a health overview of the project and
                        a summary of any challenges that have been mitigated,
                        both of which can be directly incorporated into your own
                        reports for further reporting.{" "}
                      </p>
                      <p>
                        When the unforeseeable turns into the inevitable,
                        however, we will immediately bring you into the know,
                        keep you continuously up-to-date, and work tirelessly
                        around the clock to ensure that you will never receive
                        an unpleasant surprise from our end. We strive to always
                        afford you with ample lead time to prepare your team and
                        your stakeholders against any challenges that may be
                        coming.{" "}
                      </p>
                      <p>
                        During the entire COVID-19 pandemic to date, we have not
                        even once failed to deliver on our promises.
                      </p>
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

      <div className="foooter__area">
        <div className="footer__res">
          <img src={Res} alt="" />
        </div>
        <div className="footer--top-ct">
          <h5>
            You can count on us. <br />
            You can count on DevPixel.
          </h5>
        </div>
        <div className="footer__bg">
          <img src={FooterSV} alt="" />
        </div>
      </div>
      <Footerform />
    </>
  )
}

export default HomeRedesign
