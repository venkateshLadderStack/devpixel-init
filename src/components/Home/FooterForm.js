import React from "react"
import styled from "styled-components"

const Footerform = () => {
  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__wrap">
              <div className="footer__widget">
                <div className="footer__box">
                  <h3>
                    <span>Enough about us!</span> Tell us about your project
                  </h3>
                  <p>
                    Yes, we’re interested in discussing a{" "}
                    <a href="#">project</a>
                  </p>
                </div>
                <div className="footer__form">
                  <form action="#">
                    <div className="footer__single__form">
                      <label for="#">for our company</label>
                      <input type="text" name="" id="" />
                    </div>
                    <div className="footer__form--fx">
                      <div className="footer__single__form form__wd">
                        <label for="#">My name is</label>
                        <input type="text" name="" id="" />
                      </div>
                      <div className="footer__single__form form__wd wd-def">
                        <label for="#">and you can reach me on</label>
                        <input type="text" name="" id="" />
                      </div>
                    </div>
                    <div className="footer__btn">
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background: #131f27;
`

export default Footerform
