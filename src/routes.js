import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Dashboard</div>,
    errorElement: <div> say we have an Error</div>
  },
  {
    path: "/sign",
    element: <div>sign</div>
  },
  {
    path: "/logout",
    element: <div>logout</div>
  }
])

export default router
