import { routes } from "@config/route"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter(
  routes.map((x) => ({
    path: x.path,
    element: x.component(),
  }))
)

export { router }
