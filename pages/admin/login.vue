<template>
  <div
    class="min-h-screen bg-dark-950 flex items-center justify-center p-6 relative overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0">
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="w-full max-w-md relative z-10">
      <div class="text-center mb-8">
        <div
          class="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-dark-100 mb-2">Admin Login</h1>
        <p class="text-dark-400">Sign in to access the dashboard</p>
      </div>

      <div
        class="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-glass"
      >
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-dark-200 mb-2"
              >Email</label
            >
            <input
              v-model="email"
              type="text"
              required
              class="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder-dark-500"
              placeholder="admin@Mohammed Qassim.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-dark-200 mb-2"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder-dark-500"
              placeholder="Enter your password"
            />
          </div>

          <ErrorMessage v-if="loginError" :message="loginError" type="error" />

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full px-6 py-3.5 bg-gradient-primary rounded-xl font-semibold text-white hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <LoadingSpinner v-if="isLoading" size="sm" />
            <span v-else class="flex items-center gap-2">
              Sign In
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </form>
      </div>

      <p class="text-center text-sm text-dark-500 mt-6">
        <NuxtLink
          to="/"
          class="text-primary-400 hover:text-primary-300 transition-colors"
          >← Back to Home</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: "Admin Login - Mohammed Qassim",
});

const { login, loading, error, isAuthenticated } = useAuth();

const email = ref("");
const password = ref("");
const loginError = ref<string | null>(null);
const isLoading = ref(false);

// Redirect if already authenticated
watchEffect(() => {
  if (isAuthenticated.value) {
    navigateTo("/admin/dashboard");
  }
});

const handleLogin = async () => {
  try {
    loginError.value = null;
    isLoading.value = true;
    await login(email.value, password.value);
    navigateTo("/admin/dashboard");
  } catch (e: unknown) {
    const err = e as { data?: { statusMessage?: string }; message?: string };
    loginError.value = err.data?.statusMessage || err.message || "Login failed";
  } finally {
    isLoading.value = false;
  }
};
</script>
