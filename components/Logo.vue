<template>
  <!-- Icon Only Version -->
  <div
    v-if="variant === 'icon'"
    class="inline-flex items-center justify-center"
    :class="sizeClass"
  >
    <img
      src="~/assets/image/logo Mohammed cv.png"
      alt="MQ Systems Logo"
      :width="size"
      :height="size"
      class="rounded-xl object-contain"
    />
  </div>

  <!-- Horizontal Version (Icon + Text) -->
  <div v-else class="inline-flex items-center gap-3">
    <img
      src="~/assets/image/logo Mohammed cv.png"
      alt="MQ Systems Logo"
      :width="iconSize"
      :height="iconSize"
      class="rounded-xl object-contain"
    />
    <div class="flex flex-col" :style="{ fontSize: textSize + 'px' }">
      <span class="font-bold tracking-tight" :class="textClass">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400"
          >MQ</span
        >
        <span class="text-dark-100"> Systems</span>
      </span>
      <span v-if="showTagline" class="text-xs text-dark-500 -mt-0.5"
        >Tech Solutions</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: "icon" | "horizontal";
  size?: number;
  iconSize?: number;
  textSize?: number;
  showTagline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "horizontal",
  size: 40,
  iconSize: 36,
  textSize: 18,
  showTagline: false,
});

const sizeClass = computed(() => {
  return props.size <= 32 ? "scale-90" : props.size >= 48 ? "scale-110" : "";
});

const textClass = computed(() => {
  return props.textSize <= 14
    ? "text-sm"
    : props.textSize >= 20
    ? "text-xl"
    : "text-lg";
});
</script>
