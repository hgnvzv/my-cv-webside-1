<template>
  <div class="flex items-center justify-center gap-4 mb-8" dir="rtl">
    <div v-for="step in 3" :key="step" class="flex items-center">
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all"
        :class="stepClass(step)"
      >
        <span v-if="step < currentStep">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span v-else>{{ step }}</span>
      </div>
      <span
        class="mr-2 text-sm hidden sm:block transition-colors"
        :class="step <= currentStep ? 'text-slate-800' : 'text-slate-400'"
      >
        {{ stepLabels[step - 1] }}
      </span>

      <div
        v-if="step < 3"
        class="w-8 sm:w-16 h-0.5 mx-2 sm:mx-4"
        :class="step < currentStep ? 'bg-blue-500' : 'bg-slate-200'"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentStep: number;
}

const props = defineProps<Props>();

const stepLabels = ["نوع النظام", "الموديولات", "التفاصيل"];

const stepClass = (step: number) => {
  if (step < props.currentStep) {
    return "bg-blue-500 text-white";
  } else if (step === props.currentStep) {
    return "bg-blue-500 text-white ring-4 ring-blue-500/20";
  } else {
    return "bg-slate-200 text-slate-500";
  }
};
</script>
