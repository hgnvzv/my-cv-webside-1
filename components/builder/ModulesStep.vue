<template>
  <div class="space-y-6">
    <div class="text-center mb-8">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4"
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
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        الخطوة الثانية
      </div>
      <h2 class="text-3xl font-bold text-slate-800 mb-3">اختر الموديولات</h2>
      <p class="text-slate-600 max-w-lg mx-auto">
        حدد الميزات اللي تحتاجها بنظامك. كل موديول يضيف وظيفة مهمة تسهل عليك
        إدارة عملك
      </p>
    </div>

    <div v-if="loading" class="py-12">
      <LoadingSpinner />
    </div>

    <div v-else-if="modules.length === 0" class="text-center py-12">
      <div
        class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <svg
          class="w-8 h-8 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <p class="text-slate-500 font-medium">
        اختر نوع النظام أولاً لعرض الموديولات المتاحة
      </p>
    </div>

    <div v-else class="grid md:grid-cols-2 gap-4">
      <button
        v-for="module in modules"
        :key="module.id"
        @click="toggleModule(module)"
        class="group p-5 rounded-2xl border-2 text-right transition-all hover:shadow-lg"
        :class="
          isModuleSelected(module.name)
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50'
            : 'border-slate-200 bg-white hover:border-blue-300'
        "
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
              :class="
                isModuleSelected(module.name)
                  ? 'bg-blue-500'
                  : 'bg-slate-100 group-hover:bg-blue-100'
              "
            >
              <svg
                v-if="isModuleSelected(module.name)"
                class="w-5 h-5 text-white"
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
              <svg
                v-else
                class="w-5 h-5 text-slate-400 group-hover:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <span class="font-bold text-slate-800">{{ module.name }}</span>
          </div>
        </div>
      </button>
    </div>

    <!-- Selected Summary -->
    <div
      v-if="selectedModules.length > 0"
      class="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div
            class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p class="text-blue-100 text-sm">الموديولات المختارة</p>
            <p class="font-bold text-xl">{{ selectedModules.length }} موديول</p>
          </div>
        </div>
        <div class="text-left">
          <p class="text-blue-100 text-sm">السعر يحدد حسب متطلباتك</p>
          <p class="font-bold text-lg">تواصل للحصول على عرض</p>
        </div>
      </div>
    </div>

    <div class="mt-10 flex justify-between">
      <button
        @click="$emit('prev')"
        class="px-6 py-3 border-2 border-slate-300 text-slate-600 rounded-xl font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2"
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
        الرجوع
      </button>
      <button
        @click="$emit('next')"
        :disabled="selectedModules.length === 0"
        class="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        <span>الخطوة التالية</span>
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
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Module {
  id: string;
  name: string;
  price: number;
  systemType: string;
}

interface SelectedModule {
  name: string;
  price: number;
  systemType: string;
}

interface Props {
  systemType: string;
  selectedModules: SelectedModule[];
  totalPrice: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  prev: [];
  next: [];
  toggleModule: [module: SelectedModule];
}>();

const { pricingModules, loading, fetchPricing } = usePricing();

onMounted(() => {
  fetchPricing();
});

const modules = computed(() => {
  return pricingModules.value.filter((m) => m.systemType === props.systemType);
});

const isModuleSelected = (moduleName: string) => {
  return props.selectedModules.some((m) => m.name === moduleName);
};

const toggleModule = (module: Module) => {
  emit("toggleModule", {
    name: module.name,
    price: Number(module.price),
    systemType: module.systemType,
  });
};
</script>
