import React from "react"

function Input(props) {
  const { name, placeholder } = props
  return (
    <input
      name={name}
      className="input"
      placeholder={placeholder}
      type={name == "password" ? "password" : "text"}
    />
  )
}

export default Input
