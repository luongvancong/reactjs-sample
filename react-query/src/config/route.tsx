import { Dashboard } from "@screen/dashboard"
import { Todo } from "@screen/todo"
import { Product } from "@screen/product"

export interface IRouteConfig {
  name: string
  path: string
  component: () => JSX.Element
}

export const routes: Array<IRouteConfig> = [
  {
    name: "dashboard",
    path: "/",
    component: () => <Dashboard />,
  },
  {
    name: "todo",
    path: "/todo",
    component: () => <Todo />,
  },
  {
    name: "product",
    path: "/product",
    component: () => <Product />,
  },
]
