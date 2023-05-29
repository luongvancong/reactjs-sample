import { DefaultLayout } from "@component/Layout/Default"
import { useProductList } from "@hook/query/product.list.hook"
import { Button, Input, Spin } from "antd"
import { useProductAdd } from "@hook/command/product.add.hook"
import { useState } from "react"
import { useQueryClient } from "react-query"

export const Product = () => {

  const [form, setForm] = useState({
    title: undefined
  })

  const queryClient = useQueryClient()

  const { isLoading, error, data, isFetching } = useProductList({
    limit: 100
  })

  const addProduct = useProductAdd()

  const handleChangeForm = (key, value) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  const handleAddProduct = () => {
    addProduct.mutateAsync({
      title: form.title as string,
    })
      .then(() => {
        setForm({title: undefined})
        queryClient.invalidateQueries({ queryKey: ['product.list'] })
      })
  }

  return (
    <DefaultLayout>
      <h1 className={"text-2xl text-teal-700"}>Product</h1>


      <h1 className={"text-2xl"}>Product List</h1>
      <div>Loading: {isLoading ? <Spin spinning={true} /> : 'false'}</div>
      <div>Fetching: {isFetching ? <Spin spinning={true} /> : 'false'}</div>
      <div>Error: {JSON.stringify(error)}</div>

      <div className={'mt-4 mb-4'}>
        <div className="flex flex-row gap-1">
          <Input className={'mb-4'} value={form.title} onChange={e => handleChangeForm('title', e.target.value)} />
          <Button
            loading={addProduct.isLoading}
            disabled={addProduct.isLoading}
            onClick={(e) => {
              e.preventDefault()
              handleAddProduct()
            }}>
            Add Product
          </Button>
        </div>

      </div>



      {data?.products?.map((x) => (
        <div key={x.id}>
          {x.id}: {x.title}
        </div>
      ))}
    </DefaultLayout>
  )
}
