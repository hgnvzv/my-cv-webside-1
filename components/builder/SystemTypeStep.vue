<template>
  <div class="space-y-6">
    <div class="text-center mb-8">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        الخطوة الأولى
      </div>
      <h2 class="text-3xl font-bold text-slate-800 mb-3">اختر نوع النظام</h2>
      <p class="text-slate-600 max-w-lg mx-auto">
        اختار النظام اللي يناسب عملك. كل نظام يجي وياه موديولات متخصصة تناسب
        مجالك
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <button
        v-for="system in systemTypes"
        :key="system.value"
        @click="selectSystem(system.value)"
        class="group p-6 rounded-2xl border-2 text-right transition-all hover:-translate-y-1 hover:shadow-xl"
        :class="
          selectedType === system.value
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg'
            : 'border-slate-200 bg-white hover:border-blue-300'
        "
      >
        <div class="flex flex-col items-center text-center gap-4">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform"
          >
            {{ system.icon }}
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2 text-slate-800">
              {{ system.label }}
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ system.description }}
            </p>
          </div>
          <div
            v-if="selectedType === system.value"
            class="flex items-center gap-1 text-blue-600 text-sm font-semibold"
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
            تم الاختيار
          </div>
        </div>
      </button>
    </div>

    <div class="mt-10 flex justify-center">
      <button
        @click="$emit('next')"
        :disabled="!selectedType"
        class="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-white text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
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
interface Props {
  selectedType:
    | ""
    | "medical"
    | "restaurant"
    | "school"
    | "custom"
    | "internet_users";
}

const props = defineProps<Props>();
const emit = defineEmits<{
  "update:selectedType": [
    value:
      | ""
      | "medical"
      | "restaurant"
      | "school"
      | "custom"
      | "internet_users"
  ];
  next: [];
}>();

const systemTypes: Array<{
  value: "" | "medical" | "restaurant" | "school" | "custom" | "internet_users";
  label: string;
  icon: string;
  description: string;
}> = [
  {
    value: "medical",
    label: "النظام الطبي",
    icon: "🏥",
    description: "إدارة العيادات والمستشفيات - سجلات مرضية - مواعيد - فواتير",
  },
  {
    value: "restaurant",
    label: "نظام المطاعم",
    icon: "🍽️",
    description: "إدارة الطلبات - قائمة طعام إلكترونية - حجوزات - شاشات المطبخ",
  },
  {
    value: "school",
    label: "نظام المدارس",
    icon: "🎓",
    description: "إدارة الطلاب - الدرجات - الحضور - الرسوم الدراسية",
  },
  {
    value: "internet_users",
    label: "إدارة مستخدمي الإنترنت",
    icon: "🌐",
    description: "إدارة الاشتراكات - الفواتير - الباقات - التقارير",
  },
  {
    value: "custom",
    label: "نظام مخصص",
    icon: "⚙️",
    description: "نظام حسب متطلباتك الخاصة - نبرمج لك اللي تريده بالضبط",
  },
];

const selectSystem = (
  value: "" | "medical" | "restaurant" | "school" | "custom" | "internet_users"
) => {
  emit("update:selectedType", value);
};
</script>
