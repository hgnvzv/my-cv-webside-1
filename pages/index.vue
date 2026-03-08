<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    dir="rtl"
  >
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-30">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
        ></div>
      </div>

      <!-- Navbar -->
      <nav class="relative z-50 px-6 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-14 h-14 flex items-center justify-center">
              <img
                src="/icons/cv-logo.svg"
                alt="MQ Systems Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 class="text-xl font-bold text-slate-800">MQ Systems</h1>
              <p class="text-sm text-slate-500">حلول برمجية متكاملة</p>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <a
              href="tel:+9647707752085"
              class="hidden md:flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="font-medium">07707752085</span>
            </a>
            <a
              href="https://wa.me/9647707752085"
              target="_blank"
              class="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-green-500/30"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </nav>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-right">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
            >
              <span
                class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              ></span>
              متوفر للعمل الآن
            </div>
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6"
            >
              نبني لك
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                >نظامك الخاص</span
              >
              بأحدث التقنيات
            </h1>
            <p class="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              سواء كنت تريد نظام طبي، مطعم، مدرسة، أو أي نظام مخصص لعملك - نحن
              نبرمج لك الحل الأمثل بأعلى جودة وأفضل سعر بالعراق
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <NuxtLink
                to="/builder"
                class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                اطلب نظامك الآن
              </NuxtLink>
              <a
                href="https://wa.me/9647707752085"
                target="_blank"
                class="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
              >
                <svg
                  class="w-6 h-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                استفسر عبر الواتساب
              </a>
            </div>

            <!-- Trust Badges -->
            <div
              class="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <div class="flex items-center gap-2 text-slate-600">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium">ضمان جودة</span>
              </div>
              <div class="flex items-center gap-2 text-slate-600">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium">دعم فني 24/7</span>
              </div>
              <div class="flex items-center gap-2 text-slate-600">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium">تسليم سريع</span>
              </div>
            </div>
          </div>

          <!-- Hero Image/Illustration with Profile Photo -->
          <div class="block">
            <div class="relative">
              <!-- Decorative Elements -->
              <div
                class="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl"
              ></div>
              <div
                class="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-400 rounded-full opacity-20 blur-xl"
              ></div>

              <!-- Main Card with Photo -->
              <div
                class="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative overflow-hidden"
              >
                <!-- Profile Section -->
                <div class="text-center mb-6">
                  <div class="relative inline-block">
                    <!-- Photo Frame with Gradient Border - Larger Size -->
                    <div
                      class="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full p-2 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-pink-500 shadow-2xl"
                    >
                      <div
                        class="w-full h-full rounded-full overflow-hidden bg-white ring-4 ring-white"
                      >
                        <img
                          src="/myphoto.jpg"
                          alt="Mohammed Qassim"
                          class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <!-- Online Status Badge -->
                    <div
                      class="absolute bottom-4 right-4 w-8 h-8 bg-green-500 border-4 border-white rounded-full shadow-lg"
                    ></div>
                    <!-- Floating Icon Badge -->
                    <div
                      class="absolute -top-2 -left-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <svg
                        class="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 class="font-bold text-2xl text-slate-800 mt-6">
                    محمد قاسم
                  </h3>
                  <p class="text-blue-600 font-semibold text-lg mt-1">
                    مطور برمجيات متكامل
                  </p>
                  <div class="flex items-center justify-center gap-1 mt-2">
                    <svg
                      class="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      class="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      class="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      class="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      class="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span class="text-sm text-slate-600 mr-2 font-medium"
                      >+50 مشروع ناجح</span
                    >
                  </div>
                </div>

                <!-- Stats -->
                <div
                  class="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6"
                >
                  <div class="text-center">
                    <p class="text-3xl font-bold text-blue-600">5+</p>
                    <p class="text-sm text-slate-500 mt-1">سنوات خبرة</p>
                  </div>
                  <div class="text-center border-x border-slate-100">
                    <p class="text-3xl font-bold text-blue-600">50+</p>
                    <p class="text-sm text-slate-500 mt-1">عميل سعيد</p>
                  </div>
                  <div class="text-center">
                    <p class="text-3xl font-bold text-blue-600">100%</p>
                    <p class="text-sm text-slate-500 mt-1">رضا العملاء</p>
                  </div>
                </div>
              </div>

              <!-- Floating Badge -->
              <div
                class="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2"
              >
                <div
                  class="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                ></div>
                <span class="text-sm font-semibold text-slate-700"
                  >متوفر للعمل</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            أنظمتنا المتخصصة
          </h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">
            نقدم حلول برمجية متكاملة مخصصة لمجال عملك
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
          >
            <div
              class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4"
            >
              <span class="text-3xl">🏥</span>
            </div>
            <h3 class="font-bold text-slate-800 text-lg mb-2">النظام الطبي</h3>
            <p class="text-slate-600 text-sm">
              إدارة العيادات والمستشفيات - حجز مواعيد - ملفات مرضية
            </p>
          </div>

          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
          >
            <div
              class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4"
            >
              <span class="text-3xl">🍽️</span>
            </div>
            <h3 class="font-bold text-slate-800 text-lg mb-2">نظام المطاعم</h3>
            <p class="text-slate-600 text-sm">
              إدارة الطلبات - قائمة طعام إلكترونية - شاشات المطبخ
            </p>
          </div>

          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
          >
            <div
              class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4"
            >
              <span class="text-3xl">🎓</span>
            </div>
            <h3 class="font-bold text-slate-800 text-lg mb-2">نظام المدارس</h3>
            <p class="text-slate-600 text-sm">
              إدارة الطلاب - الدرجات - الحضور - الرسوم الدراسية
            </p>
          </div>

          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
          >
            <div
              class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4"
            >
              <span class="text-3xl">⚙️</span>
            </div>
            <h3 class="font-bold text-slate-800 text-lg mb-2">نظام مخصص</h3>
            <p class="text-slate-600 text-sm">نظام حسب متطلبات عملك الخاصة</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience & Certificates Section -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            خبراتي وشهاداتي
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            لماذا تختارني؟
          </h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">
            خبرة واسعة في تطوير البرمجيات مع شهادات معتمدة وخلفية أكاديمية قوية
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Left: Education & Certificates -->
          <div class="space-y-6">
            <!-- Education Card -->
            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                >
                  <svg
                    class="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-xl text-slate-800 mb-2">
                    التعليم العالي
                  </h3>
                  <p class="text-slate-600 mb-3">
                    خريج من كلية معلومات الأعمال
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm font-medium shadow-sm"
                      >بكالوريوس</span
                    >
                    <span
                      class="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm font-medium shadow-sm"
                      >تخصص IT</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Certificates -->
            <div
              class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h3
                class="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                الشهادات المعتمدة
              </h3>
              <div class="space-y-3">
                <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div
                    class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                  >
                    <span class="text-lg">🏆</span>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-800 text-sm">
                      Full Stack Web Development
                    </p>
                    <p class="text-xs text-slate-500">Udemy / Coursera</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div
                    class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
                  >
                    <span class="text-lg">💻</span>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-800 text-sm">
                      Vue.js & Nuxt.js Certification
                    </p>
                    <p class="text-xs text-slate-500">Vue School</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div
                    class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
                  >
                    <span class="text-lg">☁️</span>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-800 text-sm">
                      Cloud Computing & AWS
                    </p>
                    <p class="text-xs text-slate-500">Amazon Web Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Skills & Experience -->
          <div class="space-y-6">
            <!-- Skills with Icons -->
            <div
              class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h3
                class="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                المهارات التقنية
              </h3>

              <!-- Skills Grid with Icons -->
              <div class="grid grid-cols-3 sm:grid-cols-4 gap-4">
                <div
                  v-for="skill in skills"
                  :key="skill.name"
                  class="group flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform"
                  >
                    <img
                      :src="`/icons/${skill.iconFile}`"
                      :alt="skill.name"
                      class="w-8 h-8 object-contain"
                    />
                  </div>
                  <span class="text-xs font-semibold text-slate-700 mb-1">{{
                    skill.name
                  }}</span>
                  <div
                    class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      :style="{ width: skill.progress + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience Timeline -->
            <div
              class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200"
            >
              <h3
                class="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                الخبرات العملية
              </h3>
              <div class="space-y-4 relative">
                <!-- Timeline Line -->
                <div
                  class="absolute right-4 top-2 bottom-2 w-0.5 bg-blue-200"
                ></div>

                <div class="flex gap-4">
                  <div
                    class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0 relative z-10"
                  >
                    <span class="text-white text-xs font-bold">5+</span>
                  </div>
                  <div>
                    <p class="font-bold text-slate-800">سنوات في البرمجة</p>
                    <p class="text-sm text-slate-600">
                      خبرة عميقة في تطوير البرمجيات وأنظمة الويب
                    </p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div
                    class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0 relative z-10"
                  >
                    <span class="text-white text-xs">50+</span>
                  </div>
                  <div>
                    <p class="font-bold text-slate-800">مشروع منجز</p>
                    <p class="text-sm text-slate-600">
                      أنظمة متنوعة في مجالات مختلفة
                    </p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div
                    class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shrink-0 relative z-10"
                  >
                    <span class="text-white text-xs">🎓</span>
                  </div>
                  <div>
                    <p class="font-bold text-slate-800">
                      مساعدة في مشاريع التخرج
                    </p>
                    <p class="text-sm text-slate-600">
                      نساعد الطلاب في إنجاز مشاريع التخرج باحترافية عالية
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Graduation Projects Help -->
            <div
              class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-slate-800 mb-1">
                    مشاريع التخرج
                  </h3>
                  <p class="text-slate-600 text-sm leading-relaxed">
                    نمتلك خبرة واسعة في مساعدة طلاب الجامعة في إنجاز مشاريع
                    التخرج. من فكرة المشروع إلى التنفيذ والتوثيق والشرح التقني.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span
                      class="px-2 py-1 bg-white text-amber-700 rounded text-xs font-medium"
                      >تطوير الويب</span
                    >
                    <span
                      class="px-2 py-1 bg-white text-amber-700 rounded text-xs font-medium"
                      >تطبيقات الموبايل</span
                    >
                    <span
                      class="px-2 py-1 bg-white text-amber-700 rounded text-xs font-medium"
                      >قواعد البيانات</span
                    >
                    <span
                      class="px-2 py-1 bg-white text-amber-700 rounded text-xs font-medium"
                      >AI & ML</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-4">جاهز تطور عملك؟</h2>
          <p class="text-blue-100 text-lg mb-8">
            تواصل ويانا الآن واحصل على استشارة مجانية وعرض سعر مناسب
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/builder"
              class="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              ابدأ مشروعك الآن
            </NuxtLink>
            <a
              href="https://wa.me/9647707752085"
              target="_blank"
              class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              واتساب مباشر
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-800 text-white py-12 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 flex items-center justify-center">
                <img
                  src="/icons/cv-logo.svg"
                  alt="MQ Systems Logo"
                  class="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <span class="font-bold text-xl">MQ Systems</span>
            </div>
            <p class="text-slate-400">
              نقدم حلول برمجية متكاملة للشركات والأعمال في العراق
            </p>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-4">تواصل ويانا</h4>
            <div class="space-y-2 text-slate-400">
              <p class="flex items-center gap-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                07707752085
              </p>
              <div class="space-y-2 text-slate-400">
                <p class="flex items-center gap-2">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  atfsucy.com@gmail.com
                </p>
              </div>
              <p class="flex items-center gap-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                بغداد، العراق
              </p>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-4">روابط سريعة</h4>
            <div class="space-y-2">
              <NuxtLink
                to="/builder"
                class="block text-slate-400 hover:text-white transition-colors"
                >طلب نظام</NuxtLink
              >
              <a
                href="https://wa.me/9647707752085"
                target="_blank"
                class="block text-slate-400 hover:text-white transition-colors"
                >تواصل عبر الواتساب</a
              >
            </div>
          </div>
        </div>
        <div class="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>© 2026 MQ Systems. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "MQ Systems - حلول برمجية متكاملة في العراق",
  meta: [
    {
      name: "description",
      content:
        "نقدم حلول برمجية متكاملة للشركات والأعمال - تطوير أنظمة طبية وإدارية وتعليمية بأحدث التقنيات",
    },
  ],
});

const skills = [
  { name: "Vue.js", iconFile: "vue-js-svgrepo-com.svg", progress: 95 },
  { name: "Nuxt.js", iconFile: "nuxt-svgrepo-com.svg", progress: 95 },
  { name: "Node.js", iconFile: "node-js-svgrepo-com.svg", progress: 85 },
  { name: "Flutter", iconFile: "flutter-svgrepo-com.svg", progress: 85 },
  { name: "Angular", iconFile: "angular-svgrepo-com.svg", progress: 85 },
  { name: "ASP.NET", iconFile: "aspnet-core-svgrepo-com.svg", progress: 85 },
  { name: "MySQL", iconFile: "mysql-svgrepo-com.svg", progress: 80 },
  {
    name: "PostgreSQL",
    iconFile: "postgresql-logo-svgrepo-com.svg",
    progress: 80,
  },
  { name: "Docker", iconFile: "docker-svgrepo-com.svg", progress: 70 },
  { name: "Vite", iconFile: "vitejs-svgrepo-com.svg", progress: 85 },
  { name: "TypeScript", iconFile: "typescript-svgrepo-com.svg", progress: 90 },
  { name: "Git", iconFile: "git-svgrepo-com.svg", progress: 85 },
];
</script>
