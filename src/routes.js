import { createBrowserRouter } from "react-router-dom"
import Sign from "./componnent/sign/sign"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Dashboard</div>,
    errorElement: <div> say we have an Error</div>
  },
  {
    path: "/sign",
    element: <Sign />
  },
  {
    path: "/logout",
    element: <div>logout</div>
  }
])

export default router
