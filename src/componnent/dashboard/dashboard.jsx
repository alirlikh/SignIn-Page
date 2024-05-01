import React, { useContext } from "react"
import { JwtContext } from "../../context/JwtContext"

function Dashboard() {
  const { user, isLoggedIn } = useContext(JwtContext)
  return (
    <>
      <div>
        {" "}
        {user && isLoggedIn ? (
          <div>Hi {user.fullName} Wellcome to JWT Auth Project</div>
        ) : (
          <div>please login</div>
        )}
      </div>
    </>
  )
}

export default Dashboard
