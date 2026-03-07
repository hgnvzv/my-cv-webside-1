<template>
  <span
    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
    :class="statusClass"
  >
    <span class="w-1.5 h-1.5 rounded-full" :class="dotClass"></span>
    {{ statusAr }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  status: string;
}

const props = defineProps<Props>();

const statusAr = computed(() => {
  switch (props.status) {
    case "New":
      return "جديد";
    case "In Progress":
      return "قيد التنفيذ";
    case "Completed":
      return "مكتمل";
    case "Cancelled":
      return "ملغي";
    default:
      return props.status;
  }
});

const statusClass = computed(() => {
  switch (props.status) {
    case "New":
      return "bg-blue-50 text-blue-700 border border-blue-200";
    case "In Progress":
      return "bg-yellow-50 text-yellow-700 border border-yellow-200";
    case "Completed":
      return "bg-green-50 text-green-700 border border-green-200";
    case "Cancelled":
      return "bg-red-50 text-red-700 border border-red-200";
    default:
      return "bg-slate-100 text-slate-600 border border-slate-200";
  }
});

const dotClass = computed(() => {
  switch (props.status) {
    case "New":
      return "bg-blue-500 animate-pulse";
    case "In Progress":
      return "bg-yellow-500 animate-pulse";
    case "Completed":
      return "bg-green-500";
    case "Cancelled":
      return "bg-red-500";
    default:
      return "bg-slate-400";
  }
});
</script>
