import { createBrowserRouter } from "react-router"
import App from "../App"
import { Layout } from "../components/layout/Layout"
import { Home } from "../pages/Home"

export function getAppRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <App />
        </Layout>
      ),
    },
    {
      path: "/home",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
  ])
}
