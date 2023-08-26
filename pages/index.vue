<template>
    <Title>Home</Title>
    <section class='wrapper'>
        <div class="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-7">
            <LazyProductCard v-for='product in data' :key='product.id' :product='product' />
        </div>
    </section>
</template>    
<script setup lang='ts'>
import { useProductsStore } from '~/stores/products';
import { Product } from "~/stores/products_types";

const { getAllProducts } = useProductsStore()
const data: Product[] = await getAllProducts()
</script>