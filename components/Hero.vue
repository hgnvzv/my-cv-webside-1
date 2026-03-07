<template>
  <section
    class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 transition-colors duration-300"
    :class="[isDark ? 'bg-dark-950' : 'bg-light-950']"
  >
    <!-- Premium background with gradient mesh -->
    <div class="absolute inset-0">
      <div
        :class="[
          'absolute inset-0 transition-colors duration-300',
          isDark
            ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950'
            : 'bg-gradient-to-br from-light-950 via-light-900 to-light-950',
        ]"
      ></div>
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl"
      ></div>
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 opacity-20"
      style="
        background-image: linear-gradient(
            rgba(99, 102, 241, 0.03) 1px,
            transparent 1px
          ),
          linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
        background-size: 60px 60px;
      "
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
      >
        <!-- Left: Introduction -->
        <div class="flex-1 text-center lg:text-left">
          <div class="animate-fade-in" style="animation-delay: 0.1s">
            <div
              :class="[
                'inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 transition-colors',
                isDark
                  ? 'bg-white/5 border-white/10'
                  : 'bg-dark-100/50 border-dark-200',
              ]"
            >
              <span
                class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
              ></span>
              <span
                :class="[
                  'text-sm font-medium',
                  isDark ? 'text-dark-300' : 'text-dark-600',
                ]"
                >{{ $t("hero.available") }}</span
              >
            </div>
          </div>

          <h1
            :class="[
              'animate-fade-in text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-colors',
              isDark ? 'text-dark-100' : 'text-dark-900',
            ]"
            style="animation-delay: 0.2s"
          >
            {{ $t("hero.greeting") }}
            <br />
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500"
              >{{ $t("hero.name") }}</span
            >
          </h1>

          <p
            :class="[
              'animate-fade-in text-xl md:text-2xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 transition-colors',
              isDark ? 'text-dark-400' : 'text-dark-600',
            ]"
            style="animation-delay: 0.3s"
          >
            <span
              :class="[
                'font-semibold',
                isDark ? 'text-dark-200' : 'text-dark-800',
              ]"
              >{{ $t("hero.title") }}</span
            >
            <br />
            <i18n-t keypath="hero.description" tag="span">
              <template #vue
                ><span class="text-primary-400">Vue</span></template
              >
              <template #nuxt
                ><span class="text-primary-400">Nuxt</span></template
              >
              <template #angular
                ><span class="text-accent-400">Angular</span></template
              >
              <template #dotnet
                ><span class="text-cyan-400">.NET Core</span></template
              >
            </i18n-t>
          </p>

          <!-- CTA Buttons - Main -->
          <div
            class="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            style="animation-delay: 0.4s"
          >
            <NuxtLink
              to="/builder"
              class="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <div
                class="absolute inset-0 bg-gradient-primary opacity-100 group-hover:opacity-90 transition-opacity"
              ></div>
              <span class="relative flex items-center justify-center gap-2">
                <span>⚡ {{ $t("hero.buildSystem") }}</span>
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
              class="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <div
                class="absolute inset-0 bg-green-500 opacity-90 group-hover:opacity-100 transition-opacity"
              ></div>
              <span class="relative flex items-center justify-center gap-2">
                <span>💬 {{ $t("hero.chat") || "Let's Chat" }}</span>
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

          <!-- Secondary CTA -->
          <div
            class="animate-fade-in flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            style="animation-delay: 0.45s"
          >
            <a
              href="#projects"
              class="group px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-3 flex items-center justify-center gap-2"
              :class="[
                isDark
                  ? 'text-dark-200 border border-white/10 hover:border-white/20 hover:bg-white/5'
                  : 'text-dark-700 border border-dark-200 hover:border-dark-300 hover:bg-dark-100/50',
              ]"
            >
              <span>{{ $t("hero.viewProjects") }}</span>
              <svg
                class="w-5 h-5 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>

          <!-- Tech Stack Icons -->
          <div
            class="animate-fade-in mt-12 flex items-center gap-6 justify-center lg:justify-start flex-wrap"
            style="animation-delay: 0.5s"
          >
            <span
              :class="['text-sm', isDark ? 'text-dark-500' : 'text-dark-600']"
              >{{ $t("hero.techStack") }}</span
            >
            <div class="flex items-center gap-4">
              <div
                class="w-10 h-10 rounded-lg transition-all hover:scale-110 cursor-pointer"
                :class="[
                  isDark
                    ? 'bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10'
                    : 'bg-dark-100/50 border border-dark-200 hover:border-primary-500/30 hover:bg-primary-500/10',
                ]"
              >
                <div class="w-full h-full flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M24,1.61H0V22.39H24ZM12,3.79,21.25,8.4V15.6L12,20.21,2.75,15.6V8.4Z"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="w-10 h-10 rounded-lg transition-all hover:scale-110 cursor-pointer"
                :class="[
                  isDark
                    ? 'bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10'
                    : 'bg-dark-100/50 border border-dark-200 hover:border-primary-500/30 hover:bg-primary-500/10',
                ]"
              >
                <div class="w-full h-full flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-green-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12,12.713l-11.985-6.713c0,0 0,0 0,0l11.985-6.713 11.985,6.713c0,0 0,0 0,0l-11.985,6.713Zm0,2.574l11.985-6.713c0,0 0,0 0,0v11.426l-11.985,6.713-11.985-6.713v-11.426c0,0 0,0 0,0l11.985,6.713Z"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="w-10 h-10 rounded-lg transition-all hover:scale-110 cursor-pointer"
                :class="[
                  isDark
                    ? 'bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10'
                    : 'bg-dark-100/50 border border-dark-200 hover:border-primary-500/30 hover:bg-primary-500/10',
                ]"
              >
                <div class="w-full h-full flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M9.931 12.645h4.138c.304 0 .54-.263.505-.566-.263-2.354-1.843-3.934-4.373-3.934-2.635 0-4.399 1.89-4.399 4.855 0 2.965 1.711 4.855 4.425 4.855 2.347 0 3.891-1.471 4.226-3.576.036-.29-.198-.543-.49-.543h-4.019c-.243 0-.44.197-.44.44v.023c0 .243.197.44.44.44h2.988c-.266 1.181-1.283 1.95-2.755 1.95-1.97 0-3.2-1.34-3.2-3.576 0-2.235 1.23-3.576 3.2-3.576 1.764 0 2.782.983 3.077 2.381h-3.523c-.243 0-.44.197-.44.44v.023c0 .243.197.44.44.44v-.001z"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="w-10 h-10 rounded-lg transition-all hover:scale-110 cursor-pointer"
                :class="[
                  isDark
                    ? 'bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10'
                    : 'bg-dark-100/50 border border-dark-200 hover:border-primary-500/30 hover:bg-primary-500/10',
                ]"
              >
                <div class="w-full h-full flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-purple-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Profile Image - LARGER & STATIC -->
        <div
          class="flex-shrink-0 animate-slide-in-right w-full lg:w-auto max-w-lg lg:max-w-xl"
          style="animation-delay: 0.3s"
        >
          <div class="relative mx-auto">
            <!-- Glow effects -->
            <div
              class="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30"
            ></div>
            <div
              class="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-cyan-400/20 rounded-full blur-2xl"
            ></div>

            <!-- Gradient ring - LARGER SIZE & STATIC -->
            <div
              class="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-cyan-400 p-1"
            >
              <div
                class="w-full h-full rounded-full bg-dark-950 dark:bg-dark-950 light:bg-light-950 p-1"
              >
                <div
                  :class="[
                    'w-full h-full rounded-full overflow-hidden transition-colors',
                    isDark ? 'bg-dark-900' : 'bg-light-900',
                  ]"
                >
                  <img
                    src="/myphoto.jpg"
                    :alt="$t('hero.name') + ' - ' + $t('hero.title')"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div
              class="absolute -top-4 -right-4 md:top-[20%] md:-right-12 animate-bounce-subtle"
              style="animation-delay: 0.5s"
            >
              <div
                :class="[
                  'px-4 py-2 rounded-xl backdrop-blur-xl border transition-colors shadow-glass',
                  isDark
                    ? 'bg-white/10 border-white/20'
                    : 'bg-dark-100/50 border-dark-200',
                ]"
              >
                <span
                  :class="[
                    'text-sm font-semibold',
                    isDark ? 'text-dark-100' : 'text-dark-900',
                  ]"
                  >{{ $t("hero.yearsExp") }}</span
                >
              </div>
            </div>

            <div
              class="absolute -bottom-4 -left-4 md:bottom-[25%] md:-left-12 animate-bounce-subtle"
              style="animation-delay: 1s"
            >
              <div class="px-4 py-2 rounded-xl bg-gradient-primary shadow-glow">
                <span class="text-sm font-semibold text-white">{{
                  $t("hero.projects")
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle"
    >
      <div
        :class="[
          'w-6 h-10 rounded-full border-2 flex items-start justify-center p-2',
          isDark ? 'border-dark-500' : 'border-dark-400',
        ]"
      >
        <div class="w-1 h-2 rounded-full bg-primary-400 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isDark } = useDarkMode();
</script>
