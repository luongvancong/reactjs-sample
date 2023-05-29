import apiClient from "@util/ApiClient"
import { IProduct } from "@model/product.model"
import { IProductAddRequest } from "@request/product.add.request"
import { IProductListResponse } from "@response/product.list.response"

export default class ProductApi {
  static list(params: any = {}) {
    return apiClient.get<IProductListResponse>("/products", {params})
  }

  static add(data: IProductAddRequest) {
    return apiClient.post<IProduct>("/products/add", data)
  }
}
