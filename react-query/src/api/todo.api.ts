import apiClient from "@util/ApiClient"
import { ITodo } from "@model/todo.model"

export default class TodoApi {
  static list(params: any = {}) {
    return apiClient.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos", params)
  }

  static add(data: any) {
    return apiClient.post<ITodo>("https://jsonplaceholder.typicode.com/todos", data)
  }
}
