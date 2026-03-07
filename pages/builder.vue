<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    dir="rtl"
  >
    <!-- Navbar -->
    <nav
      class="px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-12 h-12 flex items-center justify-center">
            <img
              src="/icons/cv-logo.svg"
              alt="MQ Systems Logo"
              class="w-full h-full object-contain"
            />
          </div>
          <span class="font-bold text-slate-800 text-lg">MQ Systems</span>
        </NuxtLink>
        <a
          href="https://wa.me/9647707752085"
          target="_blank"
          class="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2"
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="font-medium">07707752085</span>
        </a>
      </div>
    </nav>

    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            اطلب نظامك الخاص
          </h1>
          <p class="text-lg text-slate-600">
            اختر نوع النظام، حدد الموديولات اللي تحتاجها، واحصل على عرض سعر فوري
          </p>
        </div>

        <!-- Success Message -->
        <div
          v-if="submitted"
          class="text-center py-12 bg-white rounded-3xl shadow-xl p-8"
        >
          <div
            class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-10 h-10 text-green-500"
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
          </div>
          <h2 class="text-2xl font-bold text-slate-800 mb-4">
            تم إرسال طلبك بنجاح!
          </h2>
          <p class="text-slate-600 mb-8">راح نتواصل وياك خلال 24 ساعة</p>

          <!-- Next Steps Info -->
          <div
            class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 max-w-md mx-auto mb-8"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
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
              <h3 class="font-bold text-slate-800">الخطوات القادمة</h3>
            </div>
            <ul class="text-right space-y-3 text-slate-600">
              <li class="flex items-center gap-2">
                <span
                  class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs"
                  >1</span
                >
                <span>نراجع طلبك ونحلل متطلباتك</span>
              </li>
              <li class="flex items-center gap-2">
                <span
                  class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs"
                  >2</span
                >
                <span>نتواصل وياك لمناقشة التفاصيل</span>
              </li>
              <li class="flex items-center gap-2">
                <span
                  class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs"
                  >3</span
                >
                <span>نقدملك عرض سعر مخصص يناسبك</span>
              </li>
            </ul>
          </div>

          <!-- WhatsApp Contact -->
          <a
            href="https://wa.me/9647707752085"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-colors mb-4"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            تواصل معنا مباشرة
          </a>

          <div class="mt-4">
            <button
              @click="handleReset"
              class="px-6 py-3 border-2 border-slate-300 text-slate-600 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              طلب جديد
            </button>
          </div>
        </div>

        <!-- Builder Form -->
        <div v-else class="bg-white rounded-3xl shadow-xl p-8">
          <StepIndicator :current-step="currentStep" />

          <!-- Step 1: System Type -->
          <SystemTypeStep
            v-if="currentStep === 1"
            :selected-type="formData.systemType"
            @update:selected-type="updateSystemType"
            @next="nextStep"
          />

          <!-- Step 2: Modules -->
          <ModulesStep
            v-else-if="currentStep === 2"
            :system-type="formData.systemType"
            :selected-modules="formData.selectedModules"
            :total-price="totalPrice"
            @prev="prevStep"
            @next="nextStep"
            @toggle-module="toggleModule"
          />

          <!-- Step 3: Details -->
          <DetailsStep
            v-else-if="currentStep === 3"
            :system-type="formData.systemType"
            :selected-modules="formData.selectedModules"
            :total-price="totalPrice"
            :form-data="{
              clientName: formData.clientName,
              email: formData.email,
              whatsapp: formData.whatsapp,
              description: formData.description,
            }"
            :loading="loading"
            :error="error"
            @prev="prevStep"
            @update:form-data="updateFormData"
            @submit="handleSubmit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SystemTypeStep from "~/components/builder/SystemTypeStep.vue";
import ModulesStep from "~/components/builder/ModulesStep.vue";
import DetailsStep from "~/components/builder/DetailsStep.vue";
import StepIndicator from "~/components/builder/StepIndicator.vue";

useHead({
  title: "اطلب نظامك - MQ Systems",
  meta: [
    {
      name: "description",
      content: "اطلب نظامك الخاص - طبي، مطعم، مدرسة، أو نظام مخصص",
    },
  ],
});

const {
  currentStep,
  formData,
  totalPrice,
  loading,
  error,
  submitted,
  nextStep,
  prevStep,
  toggleModule,
  submitOrder,
  resetForm,
} = useBuilder();

const handleSubmit = async () => {
  try {
    await submitOrder();
  } catch {
    // Error is handled in the composable
  }
};

const updateFormData = (data: {
  clientName: string;
  email: string;
  whatsapp: string;
  description: string;
}) => {
  formData.value.clientName = data.clientName;
  formData.value.email = data.email;
  formData.value.whatsapp = data.whatsapp;
  formData.value.description = data.description;
};

const handleReset = () => {
  resetForm();
};

const updateSystemType = (
  value: "" | "medical" | "restaurant" | "school" | "custom" | "internet_users"
) => {
  formData.value.systemType = value;
};
</script>
