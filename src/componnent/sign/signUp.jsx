import React from "react"
import Button from "../button/Button"
import Input from "../input/Input"
import loginSvg from "../ui/loginSvg.svg"
import nextArrow from "../ui/nextArrow.svg"
import backArrow from "../ui/backArrow.svg"

function SignUp(props) {
  return (
    <div className="wizard-item" id="signupP">
      <div className="w-section">
        <div className="signup-container">
          <h2>SIGNUP PAGE</h2>
          <p>This is jwt-auth Application </p>
          <div className="lg-detail">
            Do you have an account?
            <button className="btn">Login</button>
          </div>
          <button className="btn prev-step-btn">
            <img src={backArrow} alt="back arrow" />
            Back
          </button>
        </div>
      </div>
      <div className="w-section login-field">
        <form action="" method="post">
          <label htmlFor="name">
            <input className="input" name="name" placeholder="Name" />
          </label>
          <label htmlFor="mobile">
            <input className="input" name="mobile" placeholder="Mobile" />
          </label>
          <label htmlFor="password">
            <input className="input" name="password" placeholder="Password" />
          </label>
          <label htmlFor="password">
            <input className="input" name="password" placeholder="Confirm Password" />
          </label>
        </form>
        <button className="btn signup-btn">Sign UP</button>
      </div>
    </div>
  )
}

export default SignUp
