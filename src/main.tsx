import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
import { getAppRouter } from "./routes/app.routes"
import "./style.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={getAppRouter()} />
  </React.StrictMode>
)
