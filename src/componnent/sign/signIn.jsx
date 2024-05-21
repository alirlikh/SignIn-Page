import React, { useState } from "react"
import Button from "../button/Button"
import Input from "../input/Input"
import loginSvg from "../ui/loginSvg.svg"
import nextArrow from "../ui/nextArrow.svg"
import backArrow from "../ui/backArrow.svg"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../services/user/user.api"
import { login } from "../../services/auth"
import * as Yup from "yup"

function SignIn(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    username: Yup.string().required("username is Required!"),
    password: Yup.string().required("Password is required!")
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const isValid = await validationSchema.validate({ username, password }, { abortEarly: false })
      setErrors({})
      if (isValid) {
        const { profileInfo } = await login({ username, password })
        if (profileInfo) {
          setUsername("")
          setPassword("")
          // navigate("/dashboard", { replace: true })
          window.location.href = "/dashboard"
        } else alert("error")
      }
    } catch (error) {
      let formErrors = {}
      error.inner.map((err) => {
        formErrors[err.path] = err.message
      })
      setErrors(formErrors)
    }
  }

  return (
    <>
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
      <div className="w-section login-field" style={{ zIndex: 3 }}>
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="username"></label>
          <input
            className="input"
            name="username"
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className="error">{errors.username}</div>}
          <label htmlFor="password"></label>
          <input
            className="input"
            name="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}

          <Button>Enter</Button>
        </form>

        <Link>Sign Up</Link>
      </div>
    </>
  )
}

export default SignIn
