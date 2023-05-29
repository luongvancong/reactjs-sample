import { useQuery } from "react-query"
import ProductApi from "@api/product.api"
import { IProductListResponse } from "@response/product.list.response"

export const useProductList = (params = {}) => {
  return useQuery<IProductListResponse, any, any, any>({
    queryKey: ["product.list"],
    queryFn: () => ProductApi.list(params).then((res) => res.data),
  })
}
