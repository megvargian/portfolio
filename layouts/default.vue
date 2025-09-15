<script setup lang="ts">
  useSeoMeta({
    title: "Mike Kouyoumdjian | Web Developer",
    ogTitle: "Mike Kouyoumdjian | Web Developer",
  description: "Explore João Pugsley's web development portfolio, showcasing a wide variety of creative and responsive websites.",
  ogDescription: "Explore João Pugsley's web development portfolio, showcasing a wide variety of creative and responsive websites.",
  keywords: "web development, web design, portfolio, Mike Kouyoumdjian Pugsley, João Pugsley, front-end development, back-end development, responsive design",
    viewport: "width=device-width, initial-scale=1",
    ogType: "website",
    ogUrl: "https://joaopugsley.dev",
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