<template>
  <div v-if="message" class="p-4 rounded-lg border" :class="typeClass">
    <div class="flex items-center gap-3">
      <svg
        v-if="type === 'error'"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <svg
        v-else-if="type === 'success'"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <svg
        v-else
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  type?: "error" | "success" | "info";
}

const props = withDefaults(defineProps<Props>(), {
  type: "error",
});

const typeClass = computed(() => {
  switch (props.type) {
    case "error":
      return "bg-red-500/10 border-red-500/20 text-red-400";
    case "success":
      return "bg-green-500/10 border-green-500/20 text-green-400";
    default:
      return "bg-blue-500/10 border-blue-500/20 text-blue-400";
  }
});
</script>
