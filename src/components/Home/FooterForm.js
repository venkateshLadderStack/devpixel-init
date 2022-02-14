import React, { useState } from "react"
import styled from "styled-components"
import $ from "jquery"

const Footerform = () => {
  const [formState, setFormState] = useState({
    message: "",
    name: "",
    email: "",
  })

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    $.ajax({
      type: "POST",
      url: "https://us-central1-gogoad-stage.cloudfunctions.net/sendMail",
      data: {
        from: formState.email,
        subject: formState.name,
        html:
          "Name: <b>" +
          formState.name +
          "</b><br>" +
          "Email: " +
          formState.email +
          "<br>" +
          "<br>" +
          "Message: " +
          formState.message,
      },
      dataType: "text",
      success: function (resultData) {
        alert("Email sent.")
        setFormState({
          message: "",
          name: "",
          email: "",
        })
      },
      error: function (err) {
        console.log(err)
        alert(err)
      },
    })
  }

  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-lg-12 m-0 p-0">
            <div className="footer__wrap">
              <div className="footer__widget">
                <div className="footer__box">
                  <h4>
                    <span>Enough about us!</span> Tell us about your project
                  </h4>
                  <p>
                    Yes, we’re interested in discussing a{" "}
                    <span className="bg-yellow">Project</span>
                  </p>
                </div>
                <div className="footer__form">
                  <form action="#">
                    <div className="footer__single__form">
                      <label className="label_text" for="#">
                        for our company
                      </label>
                      <input
                        type="text"
                        className="fname"
                        id="userMessage"
                        onChange={handleInputChange}
                        value={formState.message}
                        name="message"
                      />
                    </div>
                    <div className="footer__form--fx">
                      <div className="footer__single__form form__wd">
                        <label className="label_text" for="#">
                          My name is
                        </label>
                        <input
                          type="text"
                          id="userName"
                          value={formState.name}
                          onChange={handleInputChange}
                          name="name"
                          required
                        />
                      </div>
                      <div className="footer__single__form form__wd wd-def">
                        <label className="label_text" for="#">
                          and you can reach me on
                        </label>
                        <input
                          type="text"
                          id="userEmail"
                          value={formState.email}
                          onChange={handleInputChange}
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="footer__btn">
                      <button
                        type="submit"
                        id="btnSubmitEmail"
                        className="submit"
                      >
                        Submit
                      </button>
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
  font-family: "Poppins", sans-serif;
`

export default Footerform
