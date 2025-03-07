import { data } from "../data/data"


export const getAllCategories = () => {
    const categories = data.categories.filter(item => item)

    return categories
}

export const getCategoryById = (id: number) => {
    const category = data.categories.find(item => item.id == id)

    return category
}