import { defineStore } from 'pinia';
import { Product } from "~/stores/products_types";
export const useProductsStore = defineStore('products', {
    actions: {
        async getAllProducts() {
            const data: Product[] = await $fetch('https://fakestoreapi.com/products')
            return data
        }
    }
})