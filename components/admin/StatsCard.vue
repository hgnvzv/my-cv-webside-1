<template>
  <div class="p-6 bg-dark-800 rounded-xl border border-dark-700">
    <div class="flex items-center justify-between mb-4">
      <div
        class="w-12 h-12 rounded-lg flex items-center justify-center"
        :class="iconBgClass"
      >
        <slot name="icon">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </slot>
      </div>
      <span v-if="change" class="text-xs text-green-400">{{ change }}</span>
    </div>
    <p class="text-dark-400 text-sm mb-1">{{ title }}</p>
    <p class="text-3xl font-bold">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  value: string | number;
  change?: string;
  iconBg?: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconBg: "bg-primary-500/20 text-primary-400",
});

const iconBgClass = computed(() => props.iconBg);
</script>
