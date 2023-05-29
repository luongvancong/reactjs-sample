import { IMeResponse } from "@response/me.response"
import apiClient from "@util/ApiClient"
import { AxiosResponse } from "axios"
import { IMeRequest } from "@request/me.request"
import { IUserListResponse } from "@response/user.list.response"

export default class UserApi {
  static getCurrentUser(params: IMeRequest): Promise<AxiosResponse<IMeResponse>> {
    return apiClient.get("/api/auth/me", { params })
  }

  static getList(): Promise<AxiosResponse<IUserListResponse>> {
    return apiClient.get("/api/users")
  }
}
