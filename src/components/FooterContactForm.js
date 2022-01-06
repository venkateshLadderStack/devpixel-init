import React, { useState } from "react"
import $ from "jquery"

import styled from "styled-components"

const FormButton = styled.button`
  font-family: "SourceSansPro-Regular";
  border: 2px solid #fff;
  color: #fff;
  font-size: 18px;
  padding: 10px 40px;
  margin: 30px 0 0 0;
  display: inline-flex;
  border-radius: 5px;
  background: transparent;

  &:hover {
    background: #fff;
    color: black;
  }
`

const FooterFormContact = props => {
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
    <div className="designfooter" id="designform">
      <div className="wrap">
        <div className="row">
          <div className="col-md-12 text-center">
            <div
              className="col-md-9 new-f"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="3000"
            >
              <form id="contact-us-form" onSubmit={handleSubmit}>
                <h2 className="text-white">
                  Tell us about your project and let’s get started!
                </h2>
                <p className="para18">
                  Yes, we’re interested in discussing a project
                  <span></span>
                </p>
                <p className="para18">
                  <label for="userMessage">for our company </label>
                  <input
                    type="text"
                    className="fname"
                    id="userMessage"
                    onChange={handleInputChange}
                    value={formState.message}
                    name="message"
                  />
                </p>
                <p className="para18">
                  <label for="userName">My name is </label>
                  <input
                    type="text"
                    id="userName"
                    value={formState.name}
                    onChange={handleInputChange}
                    name="name"
                    required
                  />
                  <label for="userEmail">and you can reach me on </label>
                  <input
                    type="text"
                    id="userEmail"
                    value={formState.email}
                    onChange={handleInputChange}
                    name="email"
                    required
                  />
                </p>
                <p>
                  <FormButton
                    type="submit"
                    id="btnSubmitEmail"
                    className="submit"
                  >
                    Submit
                  </FormButton>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterFormContact
