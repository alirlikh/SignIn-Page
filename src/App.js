import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "./routes"
import JWTProvider from "./context/JwtContext"

function App() {
  return (
    <JWTProvider>
      <RouterProvider router={router} />
    </JWTProvider>
  )
}

export default App
