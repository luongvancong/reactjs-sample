import "./index.css"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ConfigProvider } from "antd"
import { Provider } from "react-redux"
import store from "@/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#177eea",
        },
      }}>
      <App />
    </ConfigProvider>
  </Provider>
)
