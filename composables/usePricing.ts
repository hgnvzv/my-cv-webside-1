import type { Ref } from "vue";

interface PricingModule {
  id: string;
  name: string;
  price: number;
  systemType: string;
  isActive: boolean;
}

interface PricingState {
  pricingModules: Ref<PricingModule[]>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  fetchPricing: () => Promise<void>;
  getPricingBySystemType: (systemType: string) => PricingModule[];
}

interface PricingResponse {
  success: boolean;
  pricingModules: PricingModule[];
}

export const usePricing = (): PricingState => {
  const pricingModules = useState<PricingModule[]>("pricing.modules", () => []);
  const loading = useState<boolean>("pricing.loading", () => false);
  const error = useState<string | null>("pricing.error", () => null);

  const fetchPricing = async () => {
    try {
      loading.value = true;
      error.value = null;

      const response = await $fetch<PricingResponse>("/api/pricing", {
        method: "GET",
      });

      if (response.success) {
        pricingModules.value = response.pricingModules.map(
          (m: PricingModule) => ({
            ...m,
            price: Number(m.price),
          })
        );
      }
    } catch (e: unknown) {
      const err = e as { message?: string };
      error.value = err.message || "Failed to fetch pricing";
    } finally {
      loading.value = false;
    }
  };

  const getPricingBySystemType = (systemType: string): PricingModule[] => {
    return pricingModules.value.filter((m) => m.systemType === systemType);
  };

  return {
    pricingModules,
    loading,
    error,
    fetchPricing,
    getPricingBySystemType,
  };
};
