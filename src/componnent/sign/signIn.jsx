import React, { useState } from "react"
import Button from "../button/Button"
import Input from "../input/Input"
import loginSvg from "../ui/loginSvg.svg"
import nextArrow from "../ui/nextArrow.svg"
import backArrow from "../ui/backArrow.svg"
import { Link } from "react-router-dom"
import SignUp from "./signUp"
import { loginUser } from "../../services/user/user.api"
import { login } from "../../services/auth"

function SignIn(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { profileInfo } = await login({ username, password })
    if (profileInfo) {
      setUsername("")
      setPassword("")
      window.location.href = "/"
    } else alert("error")
  }

  return (
    <>
      <div className="wizard-item" id="loginP">
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
          <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="username">
              <input
                className="input"
                name="username"
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              <input
                className="input"
                name="password"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <Button>Enter</Button>
          </form>

          <Link>Sign Up</Link>
        </div>
      </div>
      {/* <div className="wizard-item"></div> */}
      {/* <div className="wizard-item"></div> */}
    </>
  )
}

export default SignIn
