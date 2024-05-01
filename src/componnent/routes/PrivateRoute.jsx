import React, { useContext, useEffect } from "react"
import { JwtContext } from "../../context/JwtContext"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute() {
  const { isLoggedIn } = useContext(JwtContext)

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign" replace />
}

export default PrivateRoute
