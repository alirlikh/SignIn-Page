import React from "react"

function Input({ onChange, placeholder, value, name }) {
  // const { name, placeholder, value } = props
  return (
    <input
      name={name}
      className="input"
      placeholder={placeholder}
      type={name == "password" ? "password" : "text"}
      value={value}
      onChange={() => onChange}
    />
  )
}

export default Input
