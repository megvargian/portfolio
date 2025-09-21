<script setup lang="ts">
import { theme } from '../utils/theme';
</script>

<template>
  <footer :class="['w-full min-h-8 sm:min-h-16 border-t p-4 z-30 flex flex-col items-center', theme === 'light' ? 'bg-white border-zinc-300' : 'bg-zinc-950 border-zinc-800']">
    <span class="text-sm" :class="theme === 'light' ? 'text-zinc-700' : 'text-zinc-400'">This site was developed with Vue.js, Nuxt 3, and TypeScript</span>
    <span class="text-base" :class="theme === 'light' ? 'text-black' : 'text-white'">&copy; {{ new Date().getFullYear() }} Mike Kouyoumdjian. All rights reserved.</span>
  </footer>
</template>