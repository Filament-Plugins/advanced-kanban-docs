<template>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(item, index) in items" :key="index" class="rounded ring-1 ring-dark/5 dark:ring-white/5 p-4 flex flex-col hover:-translate-y-2 hover:shadow-lg !transition-all duration-300">
        <span class="text-md font-semibold mb-1">{{ item.title }}</span>
        <p class="text-gray-700 dark:text-gray-400 flex-1 !m-0 text-sm">{{ item.content }}</p>
      </div>
    </div>
</template>

<script setup>
defineProps(["items"])
</script>