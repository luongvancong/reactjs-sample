import { useQuery } from "react-query"
import TodoApi from "@api/todo.api"
import { ITodo } from "@model/todo.model"

export const useTodoList = (params = {}) => {
  return useQuery<ITodo[], any, ITodo[], any>({
    queryKey: ["todo.list"],
    queryFn: () => TodoApi.list(params).then((res) => res.data),
  })
}
