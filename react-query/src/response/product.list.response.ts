import { IProduct } from "@model/product.model"

export interface IProductListResponse {
  limit: number
  skip: number
  total: number
  products: IProduct[]
}
