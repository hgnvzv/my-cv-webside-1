<template>
  <div class="min-h-screen bg-dark-900 flex items-center justify-center p-6">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-primary-500 mb-4">
        {{ error?.statusCode || 404 }}
      </h1>
      <h2 class="text-2xl font-semibold mb-4">
        {{ error?.statusMessage || "Page not found" }}
      </h2>
      <p class="text-dark-400 mb-8">{{ errorMessage }}</p>
      <div class="flex gap-4 justify-center">
        <button
          @click="handleError"
          class="px-6 py-3 bg-gradient-primary rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Go Home
        </button>
        <button
          @click="goBack"
          class="px-6 py-3 border border-dark-600 rounded-lg font-semibold text-dark-300 hover:bg-dark-800 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  statusCode?: number;
  statusMessage?: string;
}

const props = defineProps<{
  error?: ErrorProps;
}>();

const errorMessage = computed(() => {
  switch (props.error?.statusCode) {
    case 404:
      return "The page you are looking for does not exist.";
    case 500:
      return "An internal server error occurred.";
    case 401:
      return "You are not authorized to access this page.";
    case 403:
      return "Access to this resource is forbidden.";
    default:
      return "Something went wrong. Please try again later.";
  }
});

const handleError = () => {
  clearError({ redirect: "/" });
};

const goBack = () => {
  const router = useRouter();
  router.back();
};

useHead({
  title: `Error ${props.error?.statusCode || 404} - Mohammed Qassim`,
});
</script>
