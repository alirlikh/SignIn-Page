import React, { useState } from "react"
import SignIn from "./signIn"
import SignUp from "./signUp"
import nextArrow from "../ui/nextArrow.svg"
import backArrow from "../ui/backArrow.svg"

function Sign() {
  const [sectionIndex, setSectionIndex] = useState(1)

  const arrowHandler = () => {
    if (sectionIndex != 2) {
      setSectionIndex(sectionIndex + 1)
    } else {
      setSectionIndex(1)
    }
  }

  return (
    <>
      <div className="wizard">
        <div className={sectionIndex == 1 ? "wizard-item active" : "wizard-item prev "} id="loginP">
          <SignIn sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} />
        </div>
        <div
          className={sectionIndex != 1 ? "wizard-item active" : "wizard-item prev "}
          id="signupP"
        >
          <SignUp sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} />
        </div>

        <button className="next-arrow" onClick={arrowHandler}>
          <img src={nextArrow} alt="next arrow" />
        </button>
      </div>
    </>
  )
}

export default Sign
