<script setup lang='ts'>
const { product } = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => { }
  }
})
const PREVIEW: string = 'https://www.mrpanet.org/global_graphics/default-store-350x350.jpg'
</script>

<template>
  <div class="shadow-xl group relative border rounded-xl px-6 py-4 hover:scale-105 transition ease-in-out delay-100">
    <div class='bg-transparent flex justify-center'>
      <img class='h-52 object-scale-down w-full max-w-xs' :src="product.image || PREVIEW" :alt="product.title">
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          {{ product.title }}
        </h3>
        <p class="mt-1 text-sm capitalize text-gray-500">{{ product.category }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ product.price }}$</p>
    </div>
  </div>
</template>