import type { Ref, ComputedRef } from "vue";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: Ref<User | null>;
  isAuthenticated: ComputedRef<boolean>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
}

interface MeResponse {
  success: boolean;
  user: User;
}

interface LoginResponse {
  success: boolean;
  user: User;
}

export const useAuth = (): AuthState => {
  const user = useState<User | null>("auth.user", () => null);
  const loading = useState<boolean>("auth.loading", () => false);
  const error = useState<string | null>("auth.error", () => null);

  const isAuthenticated = computed(() => !!user.value);

  const fetchUser = async () => {
    try {
      loading.value = true;
      error.value = null;

      const response = await $fetch<MeResponse>("/api/auth/me", {
        method: "GET",
        credentials: "include", // Important: send cookies with request
      });

      if (response.success) {
        user.value = response.user;
      }
    } catch (e: unknown) {
      user.value = null;
      error.value = "Failed to fetch user";
    } finally {
      loading.value = false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      loading.value = true;
      error.value = null;

      const response = await $fetch<LoginResponse>("/api/auth/login", {
        method: "POST",
        body: { email, password },
        credentials: "include", // Important: send and receive cookies
      });

      if (response.success) {
        user.value = response.user;
      }
    } catch (e: unknown) {
      const err = e as { data?: { statusMessage?: string }; message?: string };
      error.value = err.data?.statusMessage || err.message || "Login failed";
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    try {
      loading.value = true;

      await $fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include", // Important: send cookies
      });

      user.value = null;
    } catch (e: unknown) {
      console.error("Logout error:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
    fetchUser,
  };
};
