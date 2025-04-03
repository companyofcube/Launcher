import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
import { getAppRouter } from "./routes/app.routes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={getAppRouter()} />
  </React.StrictMode>
)
