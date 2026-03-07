import type { Ref, ComputedRef } from "vue";

interface SelectedModule {
  name: string;
  price: number;
  systemType: string;
}

interface BuilderFormData {
  clientName: string;
  email: string;
  whatsapp: string;
  systemType:
    | "medical"
    | "restaurant"
    | "school"
    | "custom"
    | "internet_users"
    | "";
  description: string;
  selectedModules: SelectedModule[];
}

interface BuilderState {
  currentStep: Ref<number>;
  formData: Ref<BuilderFormData>;
  totalPrice: ComputedRef<number>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  submitted: Ref<boolean>;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  toggleModule: (module: SelectedModule) => void;
  isModuleSelected: (moduleName: string) => boolean;
  submitOrder: () => Promise<void>;
  resetForm: () => void;
}

const SYSTEM_TYPES = [
  "medical",
  "restaurant",
  "school",
  "custom",
  "internet_users",
] as const;

export const useBuilder = (): BuilderState => {
  const currentStep = ref(1);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const submitted = ref(false);

  const formData = ref<BuilderFormData>({
    clientName: "",
    email: "",
    whatsapp: "",
    systemType: "",
    description: "",
    selectedModules: [],
  });

  const totalPrice = computed(() => {
    return formData.value.selectedModules.reduce(
      (sum, module) => sum + module.price,
      0
    );
  });

  const nextStep = () => {
    if (currentStep.value < 3) {
      currentStep.value++;
    }
  };

  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--;
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 3) {
      currentStep.value = step;
    }
  };

  const toggleModule = (module: SelectedModule) => {
    const index = formData.value.selectedModules.findIndex(
      (m) => m.name === module.name
    );

    if (index === -1) {
      formData.value.selectedModules.push(module);
    } else {
      formData.value.selectedModules.splice(index, 1);
    }
  };

  const isModuleSelected = (moduleName: string): boolean => {
    return formData.value.selectedModules.some((m) => m.name === moduleName);
  };

  const submitOrder = async () => {
    try {
      loading.value = true;
      error.value = null;

      const { createOrder } = useOrders();

      await createOrder({
        clientName: formData.value.clientName,
        email: formData.value.email,
        whatsapp: formData.value.whatsapp,
        systemType: formData.value.systemType as string,
        description: formData.value.description,
        modules: formData.value.selectedModules,
      });

      submitted.value = true;
    } catch (e: unknown) {
      const err = e as { message?: string };
      error.value = err.message || "Failed to submit order";
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const resetForm = () => {
    currentStep.value = 1;
    formData.value = {
      clientName: "",
      email: "",
      whatsapp: "",
      systemType: "",
      description: "",
      selectedModules: [],
    };
    submitted.value = false;
    error.value = null;
  };

  return {
    currentStep,
    formData,
    totalPrice,
    loading,
    error,
    submitted,
    nextStep,
    prevStep,
    goToStep,
    toggleModule,
    isModuleSelected,
    submitOrder,
    resetForm,
  };
};
