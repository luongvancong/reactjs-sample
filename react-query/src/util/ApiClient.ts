import { notification } from "antd"

import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

import lodash from "lodash"

import appConfig from "@config/app"

import localStore from "@util/LocalStore"

class ApiClient {
  static instance: AxiosInstance

  static getInstance = () => {
    if (!ApiClient.instance) {
      ApiClient.initialize()
    }

    return ApiClient.instance
  }

  get = (url: string, config: AxiosRequestConfig) => {
    return ApiClient.getInstance().get(url, config)
  }

  put = (url: string, config: AxiosRequestConfig) => {
    return ApiClient.getInstance().put(url, config)
  }

  post = (url: string, config: AxiosRequestConfig) => {
    return ApiClient.getInstance().post(url, config)
  }

  patch = (url: string, config: AxiosRequestConfig) => {
    return ApiClient.getInstance().patch(url, config)
  }

  delete = (url: string, config: AxiosRequestConfig) => {
    return ApiClient.getInstance().delete(url, config)
  }

  static initialize = () => {
    const instance = axios.create({
      baseURL: appConfig.apiUrl,
    })

    instance.defaults.headers.common["Authorization"] = `Bearer ${localStore.getItem("accessToken")}`

    instance.defaults.timeout = 30000

    instance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (lodash.get(error, "response.status") === 401) {
          // notification.error({
          //   message: "Phiên làm việc hết hạn. Vui lòng làm mới trình duyệt",
          //   key: "TOKEN_EXPIRED",
          // })

          window.location.href = `/login?redirectBackUrl=${btoa(window.location.href)}`
        } else if (lodash.get(error, "response.status") >= 500) {
          notification.error({
            message: "Máy chủ gặp sự cố. Vui lòng thử lại sau",
            key: "server_error",
          })
        }

        return Promise.reject(error)
      }
    )

    ApiClient.instance = instance
  }
}

const apiClient = ApiClient.getInstance()

export default apiClient
