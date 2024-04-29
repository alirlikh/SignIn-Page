import React from "react"
import SignIn from "./signIn"
import SignUp from "./signUp"
import nextArrow from "../ui/nextArrow.svg"
import backArrow from "../ui/backArrow.svg"

function Sign() {
  return (
    <>
      <div className="wizard">
        <SignIn />
        {/* <SignUp />
        <button className="btn ">
          <img src={nextArrow} alt="next arrow" />
        </button> */}
      </div>
    </>
  )
}

export default Sign
