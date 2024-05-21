import React, { useState } from "react"
import Button from "../button/Button"
import Input from "../input/Input"
import loginSvg from "../ui/loginSvg.svg"
import nextArrow from "../ui/nextArrow.svg"
import backArrow from "../ui/backArrow.svg"
import * as Yup from "yup"

function SignUp(props) {
  const initialData = {
    name: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  }
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})

  const validationSchema = Yup.object({
    name: Yup.string().required("name is Required!"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits!")
      .required(),
    password: Yup.string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters!")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol!")
      .matches(/[0-9]/, "Password must contain at least one number!")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter!")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match!")
      .required("Confirm password is required!")
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await validationSchema.validate(formData, { abortEarly: false })
      setErrors({})
    } catch (error) {
      let formErrors = {}
      error.inner.map((err) => {
        formErrors[err.path] = err.message
      })
      setErrors(formErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <>
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
      <div className="w-section login-field" style={{ zIndex: 1 }}>
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
              className="input"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <div className="error">{errors.name}</div>}
          <label htmlFor="mobile">
            <input
              className="input"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </label>
          {errors.mobile && <div className="error">{errors.mobile}</div>}
          <label htmlFor="password">
            <input
              className="input"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <div className="error">{errors.password}</div>}
          <label htmlFor="password">
            <input
              className="input"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </label>
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          <button className="btn signup-btn">Sign UP</button>
        </form>
      </div>
    </>
  )
}

export default SignUp
