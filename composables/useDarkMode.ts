export const useDarkMode = () => {
  const isDark = useState<boolean>("darkMode", () => true);

  const toggle = () => {
    isDark.value = !isDark.value;
    if (process.client) {
      localStorage.setItem("darkMode", String(isDark.value));
      updateDOMClass();
    }
  };

  const updateDOMClass = () => {
    if (process.client) {
      const html = document.documentElement;
      if (isDark.value) {
        html.classList.add("dark");
        html.classList.remove("light");
      } else {
        html.classList.remove("dark");
        html.classList.add("light");
      }
    }
  };

  const initialize = () => {
    if (process.client) {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        isDark.value = saved === "true";
      } else {
        // Check system preference
        isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      updateDOMClass();
    }
  };

  onMounted(() => {
    initialize();
  });

  return {
    isDark: readonly(isDark),
    toggle,
  };
};
