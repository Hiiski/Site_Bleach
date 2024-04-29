import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./pages/Home"
import Quincy from "./pages/Quincy";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/Quincy",
    element: <Quincy />,
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
