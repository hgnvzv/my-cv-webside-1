// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  tailwindcss: {
    configPath: "~/tailwind.config.cjs",
    exposeConfig: false,
    viewer: false,
  },

  i18n: {
    locales: [
      {
        code: "ar",
        name: "العربية",
        file: "ar.json",
        dir: "rtl",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
    ],
    defaultLocale: "ar",
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      fallbackLocale: "ar",
    },
  },

  runtimeConfig: {
    jwtSecret:
      process.env.JWT_SECRET ||
      "your-super-secret-jwt-key-change-in-production",
    adminEmail: process.env.ADMIN_EMAIL || "admin@Mohammed Qassim.com",
    adminPassword: process.env.ADMIN_PASSWORD || "admin123",
  },

  app: {
    head: {
      title: "MQ Systems - حلول برمجية متكاملة",
      meta: [
        {
          name: "description",
          content:
            "نقدم حلول برمجية متكاملة للشركات والأعمال - تطوير أنظمة مخصصة بأحدث التقنيات",
        },
        {
          name: "keywords",
          content:
            "تطوير برمجيات, أنظمة إدارية, تطبيقات ويب, تطبيقات موبايل, برمجة, العراق",
        },
        {
          property: "og:title",
          content: "MQ Systems - حلول برمجية متكاملة",
        },
        {
          property: "og:description",
          content: "نقدم حلول برمجية متكاملة للشركات والأعمال",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },

  typescript: {
    strict: true,
  },
});
