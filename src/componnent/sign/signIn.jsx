import React from "react"
import Button from "../button/Button"
import Input from "../input/Input"
import loginSvg from "../ui/loginSvg.svg"
import nextArrow from "../ui/nextArrow.svg"
import backArrow from "../ui/backArrow.svg"
import { Link } from "react-router-dom"
import SignUp from "./signUp"

function SignIn(props) {
  return (
    <>
      <div className={"wizard-item"} id="loginP">
        <div className="w-section">
          <div className="login-container">
            <h2>LOGIN PAGE</h2>
            <p>This is jwt-auth Application </p>
            <span className="login-brand">
              <img src={loginSvg} alt="login" />
              Login
            </span>
          </div>
        </div>
        <div className="w-section login-field">
          <form action="" method="post">
            <label htmlFor="username">
              <Input name="username" placeholder="username" />
            </label>
            <label htmlFor="password">
              <Input name="password" placeholder="password" />
            </label>
          </form>
          <Button>Enter</Button>
          <Link>forget password?</Link>
        </div>
      </div>
      {/* <div className="wizard-item"></div> */}
      {/* <div className="wizard-item"></div> */}
    </>
  )
}

export default SignIn
