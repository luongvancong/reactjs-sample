import { useMutation } from "react-query"
import TodoApi from "@api/todo.api"
import { ITodo } from "@model/todo.model"

export const useTodoAdd = () => {
  return useMutation("todo.add", (todo: ITodo) => TodoApi.add(todo))
}
