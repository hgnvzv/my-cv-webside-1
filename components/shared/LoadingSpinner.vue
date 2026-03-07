<template>
  <div class="flex items-center justify-center">
    <div
      class="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"
      :class="sizeClass"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "w-6 h-6";
    case "lg":
      return "w-12 h-12";
    default:
      return "w-8 h-8";
  }
});
</script>
