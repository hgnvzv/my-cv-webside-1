<template>
  <section id="skills" class="py-24 bg-dark-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-30">
      <div
        class="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span class="text-primary-400">⚡</span>
          <span class="text-sm text-dark-300 font-medium">{{
            $t("skills.badge")
          }}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold mb-4 text-dark-100">
          {{ $t("skills.title") }}
        </h2>
        <p class="text-dark-400 max-w-2xl mx-auto text-lg">
          {{ $t("skills.subtitle") }}
        </p>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
      >
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div
            class="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow p-2"
          >
            <img
              :src="`/icons/${skill.iconFile}`"
              :alt="skill.name"
              class="w-full h-full object-contain"
            />
          </div>
          <h3 class="font-semibold text-dark-100 mb-1">{{ skill.name }}</h3>
          <div class="flex items-center gap-2">
            <div class="flex-1 h-1.5 bg-dark-700 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-primary rounded-full transition-all duration-500"
                :style="{ width: skill.progress + '%' }"
              ></div>
            </div>
            <span class="text-xs text-dark-400 font-medium">{{
              $t(skill.levelKey)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    name: "Vue.js",
    iconFile: "vue-js-svgrepo-com.svg",
    levelKey: "skills.vue",
    progress: 95,
  },
  {
    name: "Flutter",
    iconFile: "flutter-svgrepo-com.svg",
    levelKey: "skills.flutter",
    progress: 95,
  },
  {
    name: "Nuxt.js",
    iconFile: "nuxt-svgrepo-com.svg",
    levelKey: "skills.nuxt",
    progress: 95,
  },
  {
    name: "Angular",
    iconFile: "angular-svgrepo-com.svg",
    levelKey: "skills.angular",
    progress: 85,
  },
  {
    name: "Node.js",
    iconFile: "node-js-svgrepo-com.svg",
    levelKey: "skills.nodejs",
    progress: 85,
  },
  {
    name: "Flutter",
    iconFile: "flutter-svgrepo-com.svg",
    levelKey: "skills.flutter",
    progress: 85,
  },
  {
    name: "Asp.net Core",
    iconFile: "aspnet-core-svgrepo-com.svg",
    levelKey: "skills.aspnetcore",
    progress: 85,
  },
  {
    name: "Angular",
    iconFile: "angular-svgrepo-com.svg",
    levelKey: "skills.angular",
    progress: 85,
  },
  {
    name: "MySQL",
    iconFile: "mysql-svgrepo-com.svg",
    levelKey: "skills.mysql",
    progress: 80,
  },
  {
    name: "PostgreSQL",
    iconFile: "postgresql-logo-svgrepo-com.svg",
    levelKey: "skills.postgresql",
    progress: 80,
  },
  {
    name: "Docker",
    iconFile: "docker-svgrepo-com.svg",
    levelKey: "skills.docker",
    progress: 70,
  },
  {
    name: "Vite",
    iconFile: "vitejs-svgrepo-com.svg",
    levelKey: "skills.vite",
    progress: 85,
  },
];
</script>
