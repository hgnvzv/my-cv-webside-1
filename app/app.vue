<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Initialize auth state on app load
const { fetchUser } = useAuth();
const { locale, setLocale } = useI18n();

// Force Arabic locale on app load
onMounted(() => {
  fetchUser();
  setLocale("ar");
  if (import.meta.client) {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }
});
</script>

<style>
/* Global styles with Cairo font */
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Cairo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
  min-height: 100vh;
}

/* RTL Support */
[dir="rtl"] {
  text-align: right;
}

/* Custom scrollbar - Light theme */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #2563eb 0%, #1e40af 100%);
}

/* Selection */
::selection {
  background: rgba(59, 130, 246, 0.3);
  color: #1e293b;
}
</style>
