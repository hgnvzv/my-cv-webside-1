<template>
  <div class="p-6 lg:p-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-slate-800">إدارة الطلبات</h1>
      <p class="text-slate-500 mt-1">عرض وتغيير حالة طلبات العملاء</p>
    </div>

    <!-- Filters -->
    <div
      class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6"
    >
      <div class="flex flex-wrap items-center gap-3">
        <button
          v-for="filter in filters"
          :key="filter.value"
          @click="statusFilter = filter.value"
          class="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
          :class="
            statusFilter === filter.value
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          "
        >
          {{ filter.label }}
          <span
            class="mr-1 px-1.5 py-0.5 rounded-full text-xs"
            :class="
              statusFilter === filter.value
                ? 'bg-white/30 text-white'
                : 'bg-slate-200 text-slate-600'
            "
          >
            {{ getCount(filter.value) }}
          </span>
        </button>
        <div class="flex-1"></div>
        <div class="relative">
          <svg
            class="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="بحث عن عميل..."
            class="pr-10 pl-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50 w-48"
          />
        </div>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center py-24">
      <LoadingSpinner />
    </div>

    <!-- Empty -->
    <div
      v-else-if="filteredOrders.length === 0"
      class="bg-white rounded-2xl shadow-sm border border-slate-100 text-center py-20"
    >
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
      <p class="text-slate-600 font-medium">لا توجد طلبات</p>
    </div>

    <!-- Orders Table -->
    <div
      v-else
      class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
    >
      <table class="w-full">
        <thead>
          <tr class="bg-slate-50 border-b border-slate-100">
            <th
              class="text-right py-4 px-5 text-sm font-semibold text-slate-600"
            >
              العميل
            </th>
            <th
              class="text-right py-4 px-5 text-sm font-semibold text-slate-600"
            >
              نوع النظام
            </th>
            <th
              class="text-right py-4 px-5 text-sm font-semibold text-slate-600"
            >
              السعر
            </th>
            <th
              class="text-right py-4 px-5 text-sm font-semibold text-slate-600"
            >
              الحالة
            </th>
            <th
              class="text-right py-4 px-5 text-sm font-semibold text-slate-600"
            >
              التاريخ
            </th>
            <th
              class="text-right py-4 px-5 text-sm font-semibold text-slate-600"
            >
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr
            v-for="order in filteredOrders"
            :key="order.id"
            class="hover:bg-slate-50 transition-colors"
          >
            <!-- Client -->
            <td class="py-4 px-5">
              <div class="flex items-center gap-3">
                <div
                  class="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0"
                >
                  <span class="text-blue-700 font-bold text-sm">{{
                    order.clientName.charAt(0)
                  }}</span>
                </div>
                <div>
                  <p class="font-semibold text-slate-800 text-sm">
                    {{ order.clientName }}
                  </p>
                  <p class="text-xs text-slate-500">{{ order.email }}</p>
                </div>
              </div>
            </td>

            <!-- System Type -->
            <td class="py-4 px-5">
              <span
                class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium"
              >
                {{ systemTypeAr(order.systemType) }}
              </span>
            </td>

            <!-- Price -->
            <td class="py-4 px-5">
              <span class="text-base font-bold text-blue-600"
                >${{ Number(order.totalPrice).toLocaleString() }}</span
              >
            </td>

            <!-- Status -->
            <td class="py-4 px-5">
              <StatusBadge :status="order.status" />
            </td>

            <!-- Date -->
            <td class="py-4 px-5">
              <span class="text-sm text-slate-500">{{
                formatDate(order.createdAt)
              }}</span>
            </td>

            <!-- Actions -->
            <td class="py-4 px-5">
              <div class="flex items-center gap-2">
                <!-- View Details Button -->
                <button
                  @click="openDetails(order)"
                  class="flex items-center gap-1.5 px-3 py-2 bg-blue-50 text-blue-700 rounded-xl text-xs font-semibold hover:bg-blue-100 transition-colors"
                  title="عرض التفاصيل"
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  تفاصيل
                </button>

                <!-- Complete Button (only if not completed/cancelled) -->
                <button
                  v-if="
                    order.status !== 'Completed' && order.status !== 'Cancelled'
                  "
                  @click="quickStatus(order.id, 'Completed')"
                  class="flex items-center gap-1.5 px-3 py-2 bg-green-50 text-green-700 rounded-xl text-xs font-semibold hover:bg-green-100 transition-colors"
                  title="تمييز كمكتمل"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  مكتمل
                </button>

                <!-- Cancel Button (only if not completed/cancelled) -->
                <button
                  v-if="
                    order.status !== 'Completed' && order.status !== 'Cancelled'
                  "
                  @click="quickStatus(order.id, 'Cancelled')"
                  class="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-700 rounded-xl text-xs font-semibold hover:bg-red-100 transition-colors"
                  title="إلغاء الطلب"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  إلغاء
                </button>

                <!-- Reopen button if completed/cancelled -->
                <button
                  v-if="
                    order.status === 'Completed' || order.status === 'Cancelled'
                  "
                  @click="quickStatus(order.id, 'In Progress')"
                  class="flex items-center gap-1.5 px-3 py-2 bg-yellow-50 text-yellow-700 rounded-xl text-xs font-semibold hover:bg-yellow-100 transition-colors"
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  إعادة فتح
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ===== ORDER DETAILS MODAL ===== -->
    <Transition name="fade">
      <div
        v-if="selectedOrder"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        @click.self="closeDetails"
      >
        <div
          class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <!-- Modal Header -->
          <div
            class="flex items-center justify-between p-6 border-b border-slate-100"
          >
            <div>
              <h2 class="text-xl font-bold text-slate-800">تفاصيل الطلب</h2>
              <p class="text-sm text-slate-500 mt-0.5">
                #{{ selectedOrder.id.slice(0, 8) }}
              </p>
            </div>
            <button
              @click="closeDetails"
              class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <svg
                class="w-5 h-5 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="p-6 space-y-6">
            <!-- Client Info -->
            <div class="bg-blue-50 rounded-2xl p-5">
              <h3 class="font-bold text-slate-700 mb-4 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                بيانات العميل
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-xs text-slate-500">الاسم</p>
                  <p class="font-semibold text-slate-800">
                    {{ selectedOrder.clientName }}
                  </p>
                </div>
                <div>
                  <p class="text-xs text-slate-500">البريد الإلكتروني</p>
                  <p class="font-semibold text-slate-800">
                    {{ selectedOrder.email }}
                  </p>
                </div>
                <div>
                  <p class="text-xs text-slate-500">واتساب</p>
                  <a
                    :href="`https://wa.me/${selectedOrder.whatsapp}`"
                    target="_blank"
                    class="font-semibold text-green-600 hover:underline flex items-center gap-1"
                  >
                    📱 {{ selectedOrder.whatsapp }}
                  </a>
                </div>
                <div>
                  <p class="text-xs text-slate-500">تاريخ الطلب</p>
                  <p class="font-semibold text-slate-800">
                    {{ formatDate(selectedOrder.createdAt) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- System Info -->
            <div class="bg-indigo-50 rounded-2xl p-5">
              <h3 class="font-bold text-slate-700 mb-4 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"
                  />
                </svg>
                تفاصيل النظام
              </h3>
              <div class="flex items-center justify-between mb-4">
                <div>
                  <p class="text-xs text-slate-500">نوع النظام</p>
                  <span
                    class="inline-block mt-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-bold"
                  >
                    {{ systemTypeAr(selectedOrder.systemType) }}
                  </span>
                </div>
                <div class="text-left">
                  <p class="text-xs text-slate-500">الحالة</p>
                  <div class="mt-1">
                    <StatusBadge :status="selectedOrder.status" />
                  </div>
                </div>
              </div>
              <!-- Modules List -->
              <div>
                <p class="text-xs text-slate-500 mb-2">
                  الموديولات ({{ selectedOrder.modules.length }})
                </p>
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="mod in selectedOrder.modules"
                    :key="mod.name"
                    class="flex items-center gap-2 bg-white border border-indigo-200 rounded-xl px-3 py-1.5"
                  >
                    <span class="text-sm font-medium text-slate-700">{{
                      mod.name
                    }}</span>
                    <span class="text-xs text-indigo-600 font-bold"
                      >${{ Number(mod.price).toLocaleString() }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div
              v-if="selectedOrder.description"
              class="bg-slate-50 rounded-2xl p-5"
            >
              <h3 class="font-bold text-slate-700 mb-3 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                وصف المشروع
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                {{ selectedOrder.description }}
              </p>
            </div>

            <!-- Total Price -->
            <div
              class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-5 text-white flex items-center justify-between"
            >
              <span class="text-lg font-bold">السعر الإجمالي</span>
              <span class="text-3xl font-bold"
                >${{ Number(selectedOrder.totalPrice).toLocaleString() }}</span
              >
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3 pt-2">
              <button
                v-if="
                  selectedOrder.status !== 'Completed' &&
                  selectedOrder.status !== 'Cancelled'
                "
                @click="quickStatusModal('Completed')"
                class="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-colors"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                تمييز كمكتمل
              </button>

              <button
                v-if="
                  selectedOrder.status !== 'Completed' &&
                  selectedOrder.status !== 'Cancelled'
                "
                @click="quickStatusModal('Cancelled')"
                class="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                إلغاء الطلب
              </button>

              <button
                v-if="
                  selectedOrder.status === 'Completed' ||
                  selectedOrder.status === 'Cancelled'
                "
                @click="quickStatusModal('In Progress')"
                class="flex-1 flex items-center justify-center gap-2 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-bold transition-colors"
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                إعادة فتح الطلب
              </button>

              <a
                :href="`https://wa.me/${selectedOrder.whatsapp}`"
                target="_blank"
                class="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "admin",
  layout: "admin",
});

useHead({
  title: "الطلبات - MQ Systems",
});

interface Order {
  id: string;
  clientName: string;
  email: string;
  whatsapp: string;
  systemType: string;
  description: string;
  totalPrice: number;
  status: string;
  createdAt: string;
  modules: Array<{ name: string; price: number; systemType: string }>;
}

const { orders, loading, fetchOrders, updateOrderStatus } = useOrders();

const statusFilter = ref("all");
const searchQuery = ref("");
const selectedOrder = ref<Order | null>(null);

const filters = [
  { label: "الكل", value: "all" },
  { label: "جديد", value: "New" },
  { label: "قيد التنفيذ", value: "In Progress" },
  { label: "مكتمل", value: "Completed" },
  { label: "ملغي", value: "Cancelled" },
];

const getCount = (status: string) => {
  if (status === "all") return orders.value.length;
  return orders.value.filter((o) => o.status === status).length;
};

const filteredOrders = computed(() => {
  let result = orders.value;
  if (statusFilter.value !== "all") {
    result = result.filter((o) => o.status === statusFilter.value);
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(
      (o) =>
        o.clientName.toLowerCase().includes(q) ||
        o.email.toLowerCase().includes(q) ||
        o.whatsapp.includes(q)
    );
  }
  return result;
});

const systemTypeAr = (type: string) => {
  const map: Record<string, string> = {
    medical: "طبي",
    restaurant: "مطعم",
    school: "مدرسة",
    custom: "مخصص",
  };
  return map[type] || type;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ar-IQ", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const openDetails = (order: Order) => {
  selectedOrder.value = order;
};

const closeDetails = () => {
  selectedOrder.value = null;
};

const quickStatus = async (id: string, status: string) => {
  try {
    await updateOrderStatus(id, status);
  } catch (error) {
    console.error("Failed to update status:", error);
  }
};

const quickStatusModal = async (status: string) => {
  if (!selectedOrder.value) return;
  await quickStatus(selectedOrder.value.id, status);
  // Update local state
  selectedOrder.value = { ...selectedOrder.value, status };
};

onMounted(() => {
  fetchOrders();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
