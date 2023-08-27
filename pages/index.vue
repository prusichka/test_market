<script setup lang='ts'>
import { useProductsStore } from '~/stores/products';
const { getAllProducts, products } = useProductsStore()
if (!products.length) {
    await getAllProducts()
}

// Коли ми добавляємо новий товар, він додається не в справдню базу данних, і тому, щоб можна було побачити чи товар спраді додався,
// ми отримуємо данні 1 раз і записуємо їх далі в localStorage за допомогою pinia. І перевіряємо чи у нас є хоч якісь данні, якщо є
// запит не відправляється і у нас є локальні продукти, якщо запит ще не відбувався і в localStorage пусто, то відправляємо запит і
// записуємo данні в store

</script>

<template>
    <Title>Home</Title>
    <section class='wrapper'>
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-7">
            <ProductCard v-for='product in products' :key='product.id' :product='product' />
        </div>
    </section>
</template>    