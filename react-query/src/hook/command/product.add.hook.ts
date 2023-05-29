import { useMutation } from "react-query"
import ProductApi from "@api/product.api"
import { IProductAddRequest } from "@request/product.add.request"

export const useProductAdd = () => {
  return useMutation("product.add", (data: IProductAddRequest) => ProductApi.add(data))
}
