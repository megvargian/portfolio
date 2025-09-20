<script setup lang="ts">
  useSeoMeta({
    title: "Mike Kouyoumdjian | Web Developer",
    ogTitle: "Mike Kouyoumdjian | Web Developer",
  description: "Dynamic Software Engineer with 5 years of experience in Vue.js, Nuxt, WordPress, and PHP. Proficient in unit testing using Jest and Vitest to ensure high-quality solutions. Experienced in developing cutting-edge web applications with seamless and intuitive user interfaces. Known for delivering clean, efficient code and solving complex challenges effectively. A proactive problem-solver with a strong collaborative mindset, focused on creating user-friendly solutions.",
  ogDescription: "Dynamic Software Engineer with 5 years of experience in Vue.js, Nuxt, WordPress, and PHP. Proficient in unit testing using Jest and Vitest to ensure high-quality solutions. Experienced in developing cutting-edge web applications with seamless and intuitive user interfaces. Known for delivering clean, efficient code and solving complex challenges effectively. A proactive problem-solver with a strong collaborative mindset, focused on creating user-friendly solutions.",
  keywords: "web development, web design, portfolio, Mike Kouyoumdjian Pugsley, João Pugsley, front-end development, back-end development, responsive design",
    viewport: "width=device-width, initial-scale=1",
    ogType: "website",
    ogUrl: "https://mike-kouyoumdjian.netlify.app/",
    ogSiteName: "Mike Kouyoumdjian | Web Developer"
  })
</script>

<template>
  <Sidebar/>
  <main class="p-2 md:pl-[104px]">
    <slot></slot>
  </main>
  <Footer/>
  <Particles class="-z-10"/>
</template>