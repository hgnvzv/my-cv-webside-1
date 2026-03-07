<template>
  <div class="p-6 bg-dark-800 rounded-xl border border-dark-700 sticky top-24">
    <h3 class="font-semibold mb-4">Price Summary</h3>

    <div class="space-y-3 mb-4">
      <div
        v-for="module in modules"
        :key="module.name"
        class="flex justify-between text-sm"
      >
        <span class="text-dark-400">{{ module.name }}</span>
        <span class="font-medium"
          >${{ Number(module.price).toLocaleString() }}</span
        >
      </div>
    </div>

    <div class="pt-4 border-t border-dark-700">
      <div class="flex justify-between items-center">
        <span class="font-semibold">Total</span>
        <span class="text-2xl font-bold text-primary-400"
          >${{ totalPrice.toLocaleString() }}</span
        >
      </div>
    </div>

    <p class="text-xs text-dark-500 mt-4">
      * Final price may vary based on customization requirements
    </p>
  </div>
</template>

<script setup lang="ts">
interface SelectedModule {
  name: string;
  price: number;
  systemType: string;
}

interface Props {
  modules: SelectedModule[];
  totalPrice: number;
}

defineProps<Props>();
</script>
