<script setup lang="ts">
import { theme } from '../utils/theme'
import { computed } from 'vue'

const particleColor = computed(() => theme.value === 'light' ? '#000000' : '#ffffff')

const options = computed(() => ({
  particles: {
    number: { value: 230 },
    color: { value: particleColor.value },
    move: { enable: true, random: true, speed: 0.3, straight: false },
    opacity: { animation: { enable: true, speed: 0.5, sync: false }, value: { min: 0.1, max: 0.6 } },
    size: { value: { min: 0.2, max: 2 } },
  }
}))

const key = computed(() => theme.value) // force re-render on theme change
</script>

<template>
  <NuxtParticles
    id="tsparticles"
    :options="options"
    :key="key"
    class="-z-10"
  />
</template>