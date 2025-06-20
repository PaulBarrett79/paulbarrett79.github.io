<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Case studies',
    to: '/studies/',
  },
  {
    label: 'Github',
    icon: 'i-simple-icons-github', 
    to: 'https://github.com/paulbarrett79',
    target: '_blank',
  },
  {
    label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    to: 'https://www.linkedin.com/in/paul-barrett-89040426/',
    target: '_blank',
  }
])
</script>

<template>
    <UApp class="flex grow">
      <UContainer class="w-full flex flex-col justify-stretch">
        <header>
          <UNavigationMenu :items="items" class="w-full justify-end align-center" />
        </header>
        <div class="blue-container">
          <nav class="lhs">
            photo here
          </nav>
        <section class="rhs">
          <NuxtPage :transition="{
            name: 'bounce',
            mode: 'out-in'
          }"/>
        </section>
        </div>
        
      </UContainer>
    </UApp>
</template>
