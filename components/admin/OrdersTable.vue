<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr
          class="border-b transition-colors"
          :class="[isDark ? 'border-dark-700' : 'border-light-700']"
        >
          <th
            class="text-left py-4 px-4 font-medium transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            Client
          </th>
          <th
            class="text-left py-4 px-4 font-medium transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            System Type
          </th>
          <th
            class="text-left py-4 px-4 font-medium transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            Modules
          </th>
          <th
            class="text-left py-4 px-4 font-medium transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            Price
          </th>
          <th
            class="text-left py-4 px-4 font-medium transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            Status
          </th>
          <th
            class="text-left py-4 px-4 font-medium transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            Date
          </th>
          <th
            class="text-left py-4 px-4 font-medium transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in orders"
          :key="order.id"
          class="border-b transition-colors"
          :class="[
            isDark
              ? 'border-dark-700 hover:bg-dark-800/50'
              : 'border-light-700 hover:bg-light-800/50',
          ]"
        >
          <td class="py-4 px-4">
            <div>
              <p
                class="font-medium transition-colors"
                :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
              >
                {{ order.clientName }}
              </p>
              <p
                class="text-sm transition-colors"
                :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
              >
                {{ order.email }}
              </p>
            </div>
          </td>
          <td
            class="py-4 px-4 capitalize transition-colors"
            :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
          >
            {{ order.systemType }}
          </td>
          <td class="py-4 px-4">
            <span
              class="text-sm transition-colors"
              :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
              >{{ order.modules.length }} modules</span
            >
          </td>
          <td class="py-4 px-4 font-semibold text-primary-400">
            ${{ Number(order.totalPrice).toLocaleString() }}
          </td>
          <td class="py-4 px-4">
            <StatusBadge :status="order.status" />
          </td>
          <td
            class="py-4 px-4 text-sm transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            {{ formatDate(order.createdAt) }}
          </td>
          <td class="py-4 px-4">
            <select
              :value="order.status"
              @change="
                handleStatusChange(
                  order.id,
                  ($event.target as HTMLSelectElement).value
                )
              "
              class="rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary-500 transition-colors"
              :class="[
                isDark
                  ? 'bg-dark-700 border border-dark-600 text-dark-100'
                  : 'bg-light-700 border border-light-600 text-dark-900',
              ]"
            >
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="orders.length === 0" class="text-center py-12">
      <p :class="[isDark ? 'text-dark-400' : 'text-dark-600']">
        No orders found
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useDarkMode();
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

interface Props {
  orders: Order[];
}

defineProps<Props>();

const emit = defineEmits<{
  "update-status": [id: string, status: string];
}>();

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const handleStatusChange = (id: string, status: string) => {
  emit("update-status", id, status);
};
</script>
