import { Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Sign from "./componnent/sign/sign"
import Dashboard from "./componnent/dashboard/Dashboard"
import PrivateRoute from "./componnent/routes/PrivateRoute"
import SignUp from "./componnent/sign/signUp"

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ],
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

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route index element={<PrivateRoute />}>
//         <Route exact path="/dashboard" element={<Dashboard />} />
//       </Route>
//       <Route exact path="/sign" element={<Sign />} />
//       <Route exact path="/logout" element={<div>logout</div>} />
//     </Route>
//   )
// )

export default router
