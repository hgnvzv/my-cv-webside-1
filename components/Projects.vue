<template>
  <section
    id="projects"
    class="py-24 relative overflow-hidden transition-colors duration-300"
    :class="[isDark ? 'bg-dark-950' : 'bg-light-950']"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <div
          :class="[
            'inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 transition-colors',
            isDark
              ? 'bg-white/5 border-white/10'
              : 'bg-dark-100/50 border-dark-200',
          ]"
        >
          <span class="text-cyan-400">🚀</span>
          <span
            :class="[
              'text-sm font-medium',
              isDark ? 'text-dark-300' : 'text-dark-600',
            ]"
            >{{ $t("projects.badge") }}</span
          >
        </div>
        <h2
          :class="[
            'text-3xl md:text-5xl font-bold mb-4 transition-colors',
            isDark ? 'text-dark-100' : 'text-dark-900',
          ]"
        >
          {{ $t("projects.title") }}
        </h2>
        <p
          :class="[
            'max-w-2xl mx-auto text-lg transition-colors',
            isDark ? 'text-dark-400' : 'text-dark-600',
          ]"
        >
          {{ $t("projects.subtitle") }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
          v-for="(project, index) in projects"
          :key="project.titleKey"
          :class="[
            'group relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:-translate-y-2 animate-fade-in',
            'p-6 flex flex-col h-full',
            isDark
              ? 'bg-white/5 border-white/10 hover:border-primary-500/50 hover:bg-white/10 hover:shadow-glow'
              : 'bg-dark-100/30 border-dark-200 hover:border-primary-500/30 hover:bg-dark-100/50 hover:shadow-lg',
          ]"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Project Image/Icon Container -->
          <div
            :class="[
              'h-44 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-300',
              isDark
                ? 'bg-gradient-to-br from-primary-600/20 via-accent-500/20 to-cyan-400/20'
                : 'bg-gradient-to-br from-primary-500/15 via-accent-400/15 to-cyan-300/15',
            ]"
          >
            <div
              :class="[
                'absolute inset-0 transition-opacity',
                isDark ? 'bg-gradient-glow opacity-50' : 'opacity-30',
              ]"
            ></div>
            <span
              class="text-6xl relative z-10 group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg"
              >{{ project.icon }}</span
            >
          </div>

          <!-- Title -->
          <h3
            :class="[
              'text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors',
              isDark ? 'text-dark-100' : 'text-dark-900',
            ]"
          >
            {{ $t(project.titleKey) }}
          </h3>

          <!-- Description -->
          <p
            :class="[
              'mb-4 text-sm leading-relaxed flex-grow',
              isDark ? 'text-dark-400' : 'text-dark-600',
            ]"
          >
            {{ $t(project.descKey) }}
          </p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              :class="[
                'px-3 py-1 text-xs rounded-full border transition-all hover:scale-105',
                isDark
                  ? 'bg-primary-500/10 text-primary-400 border-primary-500/20 hover:bg-primary-500/20'
                  : 'bg-primary-500/15 text-primary-600 border-primary-500/30 hover:bg-primary-500/25',
              ]"
            >
              {{ tech }}
            </span>
          </div>

          <!-- CTA Button -->
          <!-- <button
            class="group/btn relative w-full mt-auto px-4 py-2.5 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div
              class="absolute inset-0 bg-gradient-primary opacity-100 group-hover/btn:opacity-90 transition-opacity"
            ></div>
            <span class="relative flex items-center justify-center gap-2">
              <span>{{ $t("projects.viewDetails") || 'View Details' }}</span>
              <svg
                class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button> -->
        </div>
      </div>

      <!-- CTA Section -->
      <div
        :class="[
          'mt-20 pt-16 border-t text-center transition-colors',
          isDark ? 'border-white/10' : 'border-dark-200',
        ]"
      >
        <h3
          :class="[
            'text-3xl font-bold mb-6 transition-colors',
            isDark ? 'text-dark-100' : 'text-dark-900',
          ]"
        >
          {{ $t("projects.readyToStart") || "Ready to Build Your System?" }}
        </h3>
        <p
          :class="[
            'text-lg mb-8 max-w-2xl mx-auto transition-colors',
            isDark ? 'text-dark-400' : 'text-dark-600',
          ]"
        >
          {{
            $t("projects.ctaDescription") ||
            "Lets start building something amazing together. Choose your system type and get a quote within minutes."
          }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/builder"
            class="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div
              class="absolute inset-0 bg-gradient-primary opacity-100 group-hover:opacity-90 transition-opacity"
            ></div>
            <span class="relative flex items-center justify-center gap-2">
              <span>⚡ {{ $t("projects.startProject") }}</span>
              <svg
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div
              class="absolute inset-0 bg-green-500 opacity-90 group-hover:opacity-100 transition-opacity"
            ></div>
            <span class="relative flex items-center justify-center gap-2">
              <span
                >💬
                {{ $t("projects.contactUs") || "Contact Us on WhatsApp" }}</span
              >
              <svg
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.289-3.09 6.031-.073 8.346 1.34 1.012 2.86 1.535 4.104 1.535 1.52 0 2.947-.522 4.104-1.535 3.017-2.315 2.982-6.057-.073-8.346a9.868 9.868 0 00-3.031-.778z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isDark } = useDarkMode();

const projects = [
  {
    titleKey: "projects.ecommerce.title",
    descKey: "projects.ecommerce.description",
    icon: "🛍️",
    technologies: ["Nuxt 3", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    titleKey: "projects.medical.title",
    descKey: "projects.medical.description",
    icon: "🏥",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure"],
  },
  {
    titleKey: "projects.restaurant.title",
    descKey: "projects.restaurant.description",
    icon: "🍽️",
    technologies: ["Vue 3", "Nuxt", "Firebase", "TailwindCSS"],
  },
  {
    titleKey: "projects.school.title",
    descKey: "projects.school.description",
    icon: "🎓",
    technologies: ["Nuxt 3", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    titleKey: "projects.realestate.title",
    descKey: "projects.realestate.description",
    icon: "🏠",
    technologies: ["Angular", "Node.js", "MongoDB", "Google Maps"],
  },
  {
    titleKey: "projects.analytics.title",
    descKey: "projects.analytics.description",
    icon: "📊",
    technologies: ["Vue 3", "D3.js", "Python", "FastAPI"],
  },
];
</script>
