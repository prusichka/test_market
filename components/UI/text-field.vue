<script setup lang='ts'>
const emit = defineEmits(['update:modelValue'])
const { title, modelValue } = defineProps({
    title: {
        type: String,
        required: true,
        default: ''
    },
    modelValue: {
        type: String,
        default: ''
    }
})
const updateInputValue = (e: Event) => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    if (target) {
        emit('update:modelValue', target.value);
    }
}

</script>

<template>
    <div class="flex flex-col w-full">
        <label :for="title" class="block text-sm font-medium leading-6 text-gray-900">{{ title }}</label>
        <div class="mt-2">
            <input :value='modelValue' :name='title' :id='title' type="text" @input="(e) => updateInputValue(e)"
                class="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>