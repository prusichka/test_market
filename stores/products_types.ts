export interface CreateProduct {
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export interface Product extends CreateProduct {
    id: number
}