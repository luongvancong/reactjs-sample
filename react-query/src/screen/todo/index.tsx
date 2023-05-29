import { DefaultLayout } from "@component/Layout/Default"
import { Link } from "react-router-dom"
import { Button, Spin } from "antd"
import { useTodoAdd } from "@hook/command/todo.add.hook"
import { useTodoList } from "@hook/query/todo.list.hook"

export const Todo = () => {
  const { isLoading, error, data, isFetching } = useTodoList()

  const addTodo = useTodoAdd()

  // if (isLoading) {
  //   return <Spin spinning={true} />
  // }

  return (
    <DefaultLayout>
      <Link to={"/"}>Go to dashboard</Link>
      <h1 className={"text-2xl"}>Todo List</h1>
      <div>Loading: {isLoading ? <Spin spinning={true} /> : 'false'}</div>
      <div>Fetching: {isFetching ? <Spin spinning={true} /> : 'false'}</div>
      <div>Error: {JSON.stringify(error)}</div>

      <Button
        loading={addTodo.isLoading}
        disabled={addTodo.isLoading}
        onClick={(e) => {
          e.preventDefault()
          addTodo.mutateAsync({
            id: Math.random() * 1000,
            title: "ggggggggggggggggg",
            completed: false,
          })
        }}>
        Add Todo
      </Button>

      {data?.map((x) => (
        <div key={x.id}>
          {x.id}: {x.title}
        </div>
      ))}
    </DefaultLayout>
  )
}
