<template>
    <NuxtLink :to='path' class='w-full flex justify-center'>
        <button
            :class='[route.path === path ? "bg-gray-900 text-green-300 border-transparent" : "bg-transparent text-green-950"]'
            class="transition-all w-full hover:bg-gray-800 font-semibold hover:text-green-400 py-2 px-4 border border-green-950 hover:border-transparent">
            <slot></slot>
        </button>
    </NuxtLink>
</template>

<script setup lang="ts">
const { path } = defineProps({
    path: {
        type: String,
        default: '',
        required: true
    }
})
const route = useRoute()
</script>