import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Quincy from "./pages/Quincy"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
