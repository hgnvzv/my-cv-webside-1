<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isDark
        ? 'bg-dark-950/80 border-white/5'
        : 'bg-light-950/80 border-dark-200/20',
      'backdrop-blur-xl border-b',
    ]"
  >
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <Logo variant="icon" :size="54" />
        </NuxtLink>

        <div class="hidden md:flex items-center gap-6">
          <a
            href="#skills"
            :class="[
              'transition-colors relative group font-medium',
              isDark
                ? 'text-dark-300 hover:text-dark-100'
                : 'text-dark-600 hover:text-dark-100',
            ]"
          >
            {{ $t("nav.skills") }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="#projects"
            :class="[
              'transition-colors relative group font-medium',
              isDark
                ? 'text-dark-300 hover:text-dark-100'
                : 'text-dark-600 hover:text-dark-100',
            ]"
          >
            {{ $t("nav.projects") }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"
            ></span>
          </a>

          <!-- CTA Buttons -->
          <div class="flex items-center gap-3">
            <a
              href="https://wa.me/9647707752085"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative px-5 py-2.5 rounded-xl font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div
                class="absolute inset-0 bg-green-500 opacity-90 group-hover:opacity-100 transition-opacity"
              ></div>
              <span class="relative flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.289-3.09 6.031-.073 8.346 1.34 1.012 2.86 1.535 4.104 1.535 1.52 0 2.947-.522 4.104-1.535 3.017-2.315 2.982-6.057-.073-8.346a9.868 9.868 0 00-3.031-.778z"
                  />
                </svg>
                <span>WhatsApp</span>
              </span>
            </a>

            <NuxtLink
              to="/builder"
              class="group relative px-5 py-2.5 rounded-xl font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div
                class="absolute inset-0 bg-gradient-primary opacity-100 group-hover:opacity-90 transition-opacity"
              ></div>
              <span class="relative flex items-center gap-2">
                <span>{{ $t("nav.buildSystem") }}</span>
                <svg
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </span>
            </NuxtLink>
          </div>

          <!-- Dark Mode Toggle -->
          <button
            @click="toggle"
            :class="[
              'p-2.5 rounded-lg transition-all duration-300 border',
              isDark
                ? 'bg-dark-900/50 border-white/10 text-dark-300 hover:bg-dark-800/50'
                : 'bg-light-800 border-dark-200 text-dark-600 hover:bg-light-700',
            ]"
          >
            <svg
              v-if="isDark"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64 15.89v.08a10 10 0 1 1-14.86-9.86c.9-1.54 3.1-1.84 4.1-.7 1 1.14.7 2.81-.2 3.72a6 6 0 0 0 9.15 8.02h.08c1.1 0 2.3.645 2.63 1.66.27 1-.05 2.25-1.12 2.7z"
              />
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>

          <!-- Language Switcher -->
          <div
            :class="[
              'flex items-center gap-1 px-1 py-1 rounded-xl border transition-all',
              isDark
                ? 'bg-white/5 border-white/10'
                : 'bg-dark-100/50 border-dark-200',
            ]"
          >
            <button
              @click="switchLanguage('en')"
              :class="[
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300',
                locale === 'en'
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : isDark
                  ? 'text-dark-400 hover:text-dark-100'
                  : 'text-dark-500 hover:text-dark-700',
              ]"
            >
              EN
            </button>
            <button
              @click="switchLanguage('ar')"
              :class="[
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300',
                locale === 'ar'
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : isDark
                  ? 'text-dark-400 hover:text-dark-100'
                  : 'text-dark-500 hover:text-dark-700',
              ]"
            >
              AR
            </button>
          </div>
        </div>

        <div class="flex items-center gap-3 md:hidden">
          <!-- Dark Mode Toggle Mobile -->
          <button
            @click="toggle"
            :class="[
              'p-2 rounded-lg transition-all duration-300 border',
              isDark
                ? 'bg-dark-900/50 border-white/10 text-dark-300'
                : 'bg-light-800 border-dark-200 text-dark-600',
            ]"
          >
            <svg
              v-if="isDark"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64 15.89v.08a10 10 0 1 1-14.86-9.86c.9-1.54 3.1-1.84 4.1-.7 1 1.14.7 2.81-.2 3.72a6 6 0 0 0 9.15 8.02h.08c1.1 0 2.3.645 2.63 1.66.27 1-.05 2.25-1.12 2.7z"
              />
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>

          <!-- Mobile Language Switcher -->
          <div
            :class="[
              'flex items-center gap-1 px-1 py-1 rounded-lg border transition-all',
              isDark
                ? 'bg-white/5 border-white/10'
                : 'bg-dark-100/50 border-dark-200',
            ]"
          >
            <button
              @click="switchLanguage('en')"
              :class="[
                'px-2 py-1 rounded-md text-xs font-medium transition-all',
                locale === 'en'
                  ? 'bg-gradient-primary text-white'
                  : isDark
                  ? 'text-dark-400'
                  : 'text-dark-500',
              ]"
            >
              EN
            </button>
            <button
              @click="switchLanguage('ar')"
              :class="[
                'px-2 py-1 rounded-md text-xs font-medium transition-all',
                locale === 'ar'
                  ? 'bg-gradient-primary text-white'
                  : isDark
                  ? 'text-dark-400'
                  : 'text-dark-500',
              ]"
            >
              AR
            </button>
          </div>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            :class="[
              'p-2 rounded-lg transition-all',
              isDark
                ? 'text-dark-300 hover:text-white hover:bg-white/5'
                : 'text-dark-600 hover:text-dark-900 hover:bg-dark-100/50',
            ]"
          >
            <svg
              v-if="!mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="mobileMenuOpen"
        :class="[
          'md:hidden py-4 border-t animate-slide-down',
          isDark
            ? 'bg-dark-900/50 border-white/5'
            : 'bg-light-900 border-dark-200/20',
        ]"
      >
        <div class="flex flex-col gap-3">
          <a
            href="#skills"
            :class="[
              'transition-colors px-3 py-2 rounded-lg font-medium',
              isDark
                ? 'text-dark-300 hover:text-dark-100 hover:bg-white/5'
                : 'text-dark-600 hover:text-dark-900 hover:bg-dark-100/50',
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ $t("nav.skills") }}
          </a>
          <a
            href="#projects"
            :class="[
              'transition-colors px-3 py-2 rounded-lg font-medium',
              isDark
                ? 'text-dark-300 hover:text-dark-100 hover:bg-white/5'
                : 'text-dark-600 hover:text-dark-900 hover:bg-dark-100/50',
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ $t("nav.projects") }}
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2.5 bg-green-500 rounded-xl font-medium text-white hover:opacity-90 transition-opacity text-center"
            @click="mobileMenuOpen = false"
          >
            💬 WhatsApp
          </a>
          <NuxtLink
            to="/builder"
            class="px-4 py-2.5 bg-gradient-primary rounded-xl font-medium text-white hover:opacity-90 transition-opacity text-center"
            @click="mobileMenuOpen = false"
          >
            {{ $t("nav.buildSystem") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false);
const { locale, setLocale } = useI18n();
const { isDark, toggle } = useDarkMode();

const switchLanguage = (lang: string) => {
  setLocale(lang);
  // Update HTML dir attribute for RTL support
  if (import.meta.client) {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }
};

// Set initial direction
onMounted(() => {
  if (import.meta.client) {
    document.documentElement.dir = locale.value === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale.value;
  }
});
</script>
