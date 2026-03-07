<template>
  <div
    class="rounded-xl border backdrop-blur-lg shadow-glass transition-colors"
    :class="[
      paddingClass,
      isDark ? 'border-white/10 bg-white/5' : 'border-dark-200 bg-dark-100/50',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const { isDark } = useDarkMode();

interface Props {
  padding?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
  padding: "md",
});

const paddingClass = computed(() => {
  switch (props.padding) {
    case "sm":
      return "p-4";
    case "lg":
      return "p-8";
    default:
      return "p-6";
  }
});
</script>
