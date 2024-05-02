import React, { Component, useContext, useEffect, useState } from "react"
import { JwtContext } from "../../context/JwtContext"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute() {
  const { isLoggedIn } = useContext(JwtContext)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign" replace />
}

export default PrivateRoute
