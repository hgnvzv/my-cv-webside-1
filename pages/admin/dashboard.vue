<template>
  <div class="p-6 lg:p-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-slate-800">مرحباً بك 👋</h1>
      <p class="text-slate-500 mt-1">إدارة طلبات الأنظمة من هنا</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <!-- Total -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-blue-600"
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
          </div>
          <span
            class="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
            >مجموع</span
          >
        </div>
        <div class="text-3xl font-bold text-slate-800">{{ stats.total }}</div>
        <div class="text-sm text-slate-500 mt-1">إجمالي الطلبات</div>
      </div>

      <!-- New -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span
            class="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full"
          >
            <span
              class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
            ></span>
            جديد
          </span>
        </div>
        <div class="text-3xl font-bold text-slate-800">{{ stats.new }}</div>
        <div class="text-sm text-slate-500 mt-1">طلبات جديدة</div>
      </div>

      <!-- In Progress -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span
            class="text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full"
            >نشط</span
          >
        </div>
        <div class="text-3xl font-bold text-slate-800">
          {{ stats.inProgress }}
        </div>
        <div class="text-sm text-slate-500 mt-1">قيد التنفيذ</div>
      </div>

      <!-- Revenue -->
      <div
        class="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-lg"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span class="text-xs font-semibold text-blue-100">إيرادات</span>
        </div>
        <div class="text-3xl font-bold text-white">
          ${{ stats.revenue.toLocaleString() }}
        </div>
        <div class="text-sm text-blue-100 mt-1">إجمالي الإيرادات</div>
      </div>
    </div>

    <!-- Recent Orders Preview -->
    <div
      class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
    >
      <div
        class="p-6 border-b border-slate-100 flex items-center justify-between"
      >
        <h2 class="text-lg font-bold text-slate-800">آخر الطلبات</h2>
        <NuxtLink
          to="/admin/orders"
          class="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
        >
          عرض الكل
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </NuxtLink>
      </div>

      <div v-if="loading" class="py-16 flex items-center justify-center">
        <LoadingSpinner />
      </div>

      <div v-else-if="recentOrders.length === 0" class="text-center py-16">
        <div
          class="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4"
        >
          <svg
            class="w-8 h-8 text-blue-400"
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
        </div>
        <h3 class="text-lg font-semibold text-slate-700 mb-1">
          لا توجد طلبات بعد
        </h3>
        <p class="text-slate-500 text-sm">
          ستظهر طلبات العملاء هنا بعد إرسالها
        </p>
      </div>

      <div v-else class="divide-y divide-slate-100">
        <div
          v-for="order in recentOrders"
          :key="order.id"
          class="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"
            >
              <span class="text-blue-700 font-bold text-sm">{{
                order.clientName.charAt(0)
              }}</span>
            </div>
            <div>
              <p class="font-semibold text-slate-800">{{ order.clientName }}</p>
              <p class="text-sm text-slate-500">
                {{ order.systemType }} • ${{
                  Number(order.totalPrice).toLocaleString()
                }}
              </p>
            </div>
          </div>
          <StatusBadge :status="order.status" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "admin",
  layout: "admin",
});

useHead({
  title: "لوحة التحكم - MQ Systems",
});

const { orders, loading, fetchOrders } = useOrders();

const stats = computed(() => ({
  total: orders.value.length,
  new: orders.value.filter((o) => o.status === "New").length,
  inProgress: orders.value.filter((o) => o.status === "In Progress").length,
  revenue: orders.value.reduce((sum, o) => sum + Number(o.totalPrice), 0),
}));

const recentOrders = computed(() => orders.value.slice(0, 5));

onMounted(() => {
  fetchOrders();
});
</script>
