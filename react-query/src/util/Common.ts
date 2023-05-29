import dayjs from "dayjs"
import numeral from "numeral"
import { routes } from "@config/route"
import { generatePath } from "react-router-dom"

export const formatDate = (d: string, format: string) => {
  if (!d) return ""
  return dayjs(d).format(format)
}

export const formatDateShort = (d: string) => {
  return formatDate(d, "DD/MM/YYYY")
}

export const formatDateMedium = (d: string) => {
  return formatDate(d, "DD/MM/YYYY HH:mm")
}

export const formatDateFull = (d: string) => {
  return formatDate(d, "DD/MM/YYYY HH:mm:ss")
}

export const convertFileToBuffer = (file: any) => {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader()
    // Register event listeners
    reader.addEventListener("loadend", (e: any) => resolve(e.target.result))
    reader.addEventListener("error", reject)
    // Read file
    reader.readAsArrayBuffer(file)
  })
}

export const formatPrice = (numberInput: any) => {
  if (numberInput === undefined || numberInput === "" || numberInput === null) return ""
  return numeral(numberInput).format("0,0[.][000]")
}

export const getRoutePathByName = (name: string, params?: any) => {
  const route = routes.find((x) => x.name === name)
  if (route) {
    return generatePath(route.path, params)
  }

  return "/"
}

export const priceFormatter = (value: any) => {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const priceParser = (value: any) => {
  return value!.replace(/\$\s?|(,*)/g, "")
}
