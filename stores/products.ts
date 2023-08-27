import { defineStore } from 'pinia';
import { CreateProduct, Product } from "~/stores/products_types";
export const useProductsStore = defineStore('products', {
    state() {
        return {
            products: [] as Product[]
        }
    },
    actions: {
        async getAllProducts() {
            const data: Product[] = await $fetch('https://fakestoreapi.com/products')
            this.products = data
        },
        async createProduct(product: CreateProduct) {
            const data: Product = await $fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                body: product
            })
            this.products.unshift(data)
        }
    },
    persist: {
        storage: persistedState.localStorage,
    },
})