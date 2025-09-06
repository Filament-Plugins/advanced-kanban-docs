<template>
    <div class="space-y-3">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex justify-between items-center p-4 rounded-lg transition
            bg-gray-50 hover:bg-gray-100
            dark:bg-gray-800 dark:hover:bg-gray-700
            border border-transparent"
      :class="{'border-indigo-500': item.title === 'Enterprise License'}"
    >
      <span class="font-medium text-gray-700 dark:text-gray-200">{{ item?.title }}</span>
      <span class="text-gray-900 font-semibold dark:text-gray-100">
        {{ item?.price }}
        <span class="text-gray-500 text-sm dark:text-gray-400">- {{ item?.description }}</span>
      </span>
    </div>
  </div>

</template>

<script setup>
defineProps(["items"])
</script>