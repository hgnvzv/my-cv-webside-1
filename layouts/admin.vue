<template>
  <div class="min-h-screen bg-slate-100 flex" dir="rtl">
    <!-- Sidebar -->
    <aside
      class="w-64 bg-white border-l border-slate-200 fixed h-full flex flex-col shadow-lg z-40"
    >
      <!-- Logo -->
      <div class="p-5 border-b border-slate-100">
        <NuxtLink to="/admin/dashboard" class="flex items-center gap-3">
          <div class="w-10 h-10 flex items-center justify-center">
            <img
              src="/icons/cv-logo.svg"
              alt="MQ Systems"
              class="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 class="font-bold text-slate-800">MQ Systems</h1>
            <p class="text-xs text-slate-500">لوحة التحكم</p>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-1">
        <NuxtLink
          to="/admin/dashboard"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium"
          active-class="bg-blue-50 text-blue-700 border-r-4 border-blue-600"
        >
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>لوحة التحكم</span>
        </NuxtLink>

        <NuxtLink
          to="/admin/orders"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium"
          active-class="bg-blue-50 text-blue-700 border-r-4 border-blue-600"
        >
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <span>الطلبات</span>
        </NuxtLink>
      </nav>

      <!-- User Section -->
      <div class="p-4 border-t border-slate-100">
        <div
          class="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-50 mb-3"
        >
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center"
          >
            <span class="text-sm font-bold text-white">م</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-slate-800">محمد قاسم</p>
            <p class="text-xs text-slate-500">مدير النظام</p>
          </div>
        </div>

        <button
          @click="handleLogout"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all font-medium"
        >
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
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span>تسجيل خروج</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="mr-64 flex-1 min-h-screen overflow-auto">
      <!-- Top Bar -->
      <header
        class="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between"
      >
        <div class="flex items-center gap-2 text-sm text-slate-500">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {{ currentDate }}
        </div>
        <NuxtLink
          to="/"
          class="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          عرض الموقع
        </NuxtLink>
      </header>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { logout, fetchUser } = useAuth();

// Fetch user on mount to maintain auth state on refresh
onMounted(() => {
  fetchUser();
});

const currentDate = computed(() => {
  return new Date().toLocaleDateString("ar-IQ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

const handleLogout = async () => {
  await logout();
  navigateTo("/admin/login");
};
</script>
