export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuthenticated, fetchUser } = useAuth();

  // On server-side during SSR, we can't access cookies easily
  // So we skip the check and let the client-side handle it
  if (process.server) {
    return;
  }

  // On client-side, fetch user if not authenticated
  if (!isAuthenticated.value) {
    await fetchUser();
  }

  // Check if user is authenticated
  if (!isAuthenticated.value) {
    return navigateTo("/admin/login");
  }
});
