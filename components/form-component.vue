<script setup lang='ts'>
import { CreateProduct } from '~/stores/products_types';
import { useProductsStore } from '~/stores/products'
const { createProduct } = useProductsStore()
const product: Ref<CreateProduct> = ref({
    title: '',
    price: '',
    category: '',
    description: '',
    image: 'https://www.mrpanet.org/global_graphics/default-store-350x350.jpg'
})
async function createProd() {
    // createProduct
    await createProduct(product.value)
}
</script>

<template>
    <div class=''>
        <form class='mx-auto my-10 p-7 shadow-lg border-2 rounded-md border-slate-400'>
            <div class="grid grid-cols-2 gap-4 mb-6">
                <UITextField v-model='product.title' title='Title' />
                <UITextField v-model='product.price' title='Price' />
            </div>
            <div class="grid grid-cols-2 gap-4 mb-6">
                <UITextField v-model='product.description' title='Description' />
                <UITextField v-model='product.category' title='Category' />
            </div>
                
        </form>
        <UIButton @click='createProd'>Publish Product</UIButton>
        <div class='grid grid-cols-12'>
            <div class='col-span-4 col-start-5'>
                <ProductCard :product='product' />
            </div>
        </div>
    </div>
</template>
