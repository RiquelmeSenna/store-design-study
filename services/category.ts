import { data } from "../data/data"

export const getProductsFromCategory = (categoryId: number) => {
    const products = data.products.filter(item => item.idCategory == categoryId)

    return products
}

export const getAllCategories = () => {
    const categories = data.categories.filter(item => item)

    return categories
}