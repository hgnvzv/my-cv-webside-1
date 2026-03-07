import type { Ref } from "vue";

interface SelectedModule {
  name: string;
  price: number;
  systemType: string;
}

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
  modules: SelectedModule[];
}

interface OrdersState {
  orders: Ref<Order[]>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  fetchOrders: () => Promise<void>;
  createOrder: (data: CreateOrderData) => Promise<Order>;
  updateOrderStatus: (id: string, status: string) => Promise<void>;
}

interface CreateOrderData {
  clientName: string;
  email: string;
  whatsapp: string;
  systemType: string;
  description?: string;
  modules: SelectedModule[];
}

interface OrdersResponse {
  success: boolean;
  orders: Order[];
}

interface OrderResponse {
  success: boolean;
  order: Order;
  message?: string;
}

export const useOrders = (): OrdersState => {
  const orders = useState<Order[]>("orders.list", () => []);
  const loading = useState<boolean>("orders.loading", () => false);
  const error = useState<string | null>("orders.error", () => null);

  const fetchOrders = async () => {
    try {
      loading.value = true;
      error.value = null;

      const response = await $fetch<OrdersResponse>("/api/orders", {
        method: "GET",
      });

      if (response.success) {
        orders.value = response.orders.map((o: Order) => ({
          ...o,
          totalPrice: Number(o.totalPrice),
          modules: o.modules.map((m: SelectedModule) => ({
            ...m,
            price: Number(m.price),
          })),
        }));
      }
    } catch (e: unknown) {
      const err = e as { message?: string };
      error.value = err.message || "Failed to fetch orders";
    } finally {
      loading.value = false;
    }
  };

  const createOrder = async (data: CreateOrderData): Promise<Order> => {
    try {
      loading.value = true;
      error.value = null;

      const response = await $fetch<OrderResponse>("/api/orders", {
        method: "POST",
        body: data,
      });

      if (response.success) {
        return {
          ...response.order,
          totalPrice: Number(response.order.totalPrice),
          modules: response.order.modules.map((m: SelectedModule) => ({
            ...m,
            price: Number(m.price),
          })),
        };
      }

      throw new Error("Failed to create order");
    } catch (e: unknown) {
      const err = e as { message?: string };
      error.value = err.message || "Failed to create order";
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const updateOrderStatus = async (id: string, status: string) => {
    try {
      loading.value = true;
      error.value = null;

      const response = await $fetch<OrderResponse>(`/api/orders/${id}`, {
        method: "PATCH",
        body: { status },
      });

      if (response.success) {
        const index = orders.value.findIndex((o) => o.id === id);
        if (index !== -1) {
          orders.value[index] = {
            ...response.order,
            totalPrice: Number(response.order.totalPrice),
            modules: response.order.modules.map((m: SelectedModule) => ({
              ...m,
              price: Number(m.price),
            })),
          };
        }
      }
    } catch (e: unknown) {
      const err = e as { message?: string };
      error.value = err.message || "Failed to update order status";
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return {
    orders,
    loading,
    error,
    fetchOrders,
    createOrder,
    updateOrderStatus,
  };
};
