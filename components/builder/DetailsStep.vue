<template>
  <div class="space-y-6">
    <div class="text-center mb-8">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        الخطوة الثالثة والأخيرة
      </div>
      <h2 class="text-3xl font-bold text-slate-800 mb-3">أرسل طلبك</h2>
      <p class="text-slate-600 max-w-lg mx-auto">
        املأ بياناتك وتواصل ويانا مباشرة. راح نتواصل وياك خلال 24 ساعة ونقدملك
        عرض مخصص يناسب احتياجاتك
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-bold mb-2 text-slate-700"
            >الاسم الكامل *</label
          >
          <input
            v-model="formData.clientName"
            type="text"
            required
            class="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-blue-500 transition-colors bg-white text-slate-800"
            placeholder="مثال: محمد أحمد"
          />
        </div>

        <div>
          <label class="block text-sm font-bold mb-2 text-slate-700"
            >البريد الإلكتروني *</label
          >
          <input
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-blue-500 transition-colors bg-white text-slate-800"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-bold mb-2 text-slate-700"
          >رقم الواتساب *</label
        >
        <div class="relative">
          <input
            v-model="formData.whatsapp"
            type="tel"
            required
            class="w-full px-4 py-3 pr-12 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-blue-500 transition-colors bg-white text-slate-800"
            placeholder="07700000000"
          />
          <div class="absolute left-4 top-1/2 -translate-y-1/2">
            <svg
              class="w-6 h-6 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label class="block text-sm font-bold mb-2 text-slate-700"
          >تفاصيل المشروع</label
        >
        <textarea
          v-model="formData.description"
          rows="4"
          class="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-blue-500 transition-colors resize-none bg-white text-slate-800"
          placeholder="اكتب أي تفاصيل إضافية عن مشروعك... مثال: أحتاج نظام لعيادة أسنان صغيرة"
        ></textarea>
      </div>

      <!-- Order Summary (No Price) -->
      <div
        class="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
      >
        <h3 class="font-bold text-lg mb-4 flex items-center gap-2">
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
          ملخص طلبك
        </h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-blue-100 text-sm">نوع النظام</p>
            <p class="font-bold text-lg">{{ systemTypeAr(systemType) }}</p>
          </div>
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-blue-100 text-sm">الموديولات المختارة</p>
            <p class="font-bold text-lg">{{ selectedModules.length }} موديول</p>
          </div>
        </div>
        <div class="border-t border-white/20 pt-4">
          <p class="text-blue-100 text-sm mb-1">السعر</p>
          <p class="font-bold text-xl">نحدد السعر حسب متطلباتك المحددة</p>
          <p class="text-blue-100 text-sm mt-1">
            راح نتواصل وياك ونقدملك أفضل عرض
          </p>
        </div>
      </div>

      <ErrorMessage v-if="error" :message="error" type="error" />

      <div class="flex justify-between pt-4">
        <button
          type="button"
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
          type="submit"
          :disabled="loading"
          class="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold text-white hover:shadow-xl hover:shadow-green-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <LoadingSpinner v-if="loading" size="sm" />
          <template v-else>
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span>إرسال الطلب</span>
          </template>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
interface SelectedModule {
  name: string;
  price: number;
  systemType: string;
}

interface FormData {
  clientName: string;
  email: string;
  whatsapp: string;
  description: string;
}

interface Props {
  systemType: string;
  selectedModules: SelectedModule[];
  totalPrice: number;
  formData: FormData;
  loading?: boolean;
  error?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  error: null,
});

const emit = defineEmits<{
  prev: [];
  submit: [];
  "update:formData": [data: FormData];
}>();

const systemTypeAr = (type: string) => {
  const map: Record<string, string> = {
    medical: "النظام الطبي",
    restaurant: "نظام المطاعم",
    school: "نظام المدارس",
    custom: "نظام مخصص",
    internet_users: "إدارة مستخدمي الإنترنت",
  };
  return map[type] || type;
};

const handleSubmit = () => {
  emit("update:formData", {
    clientName: props.formData.clientName,
    email: props.formData.email,
    whatsapp: props.formData.whatsapp,
    description: props.formData.description,
  });
  emit("submit");
};
</script>
