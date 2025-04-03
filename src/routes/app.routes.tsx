import { createBrowserRouter } from "react-router"
import App from "../App"
import { Home } from "../pages/Home"

export function getAppRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ])
}
