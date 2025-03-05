import { data } from "../data/data"


export const getAllProducts = () => {
    const products = data.products.filter(item => item)
    return products
}

export const getProduct = (id: number) => {
    const product = data.products.find(item => item.id == id)
    return product
}