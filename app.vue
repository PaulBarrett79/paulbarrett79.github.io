<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Case studies',
    to: '/studies',
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
    <UApp class="flex grow h-full">
      <UContainer class="w-full h-full flex flex-col justify-stretch">
        <header class="flex justify-between items-center">
          <NuxtLink to="/">
            <NuxtImg src="/img/pblogodark.png" height="50px" width="auto" ></NuxtImg>
          </NuxtLink>
          
          <UNavigationMenu :items="items" class="w-full justify-end align-center" />
        </header>
        <div class="blue-container">
          <nav class="lhs">
            photo here
          </nav>
          <section class="rhs">
            <NuxtPage />
          </section>
        </div>
        <footer class="h-30">
          hi
        </footer>
      </UContainer>
    </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>