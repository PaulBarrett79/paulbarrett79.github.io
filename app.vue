<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Case studies',
    icon: 'i-lucide-notebook', 
    to: '/studies',
  },
  {
    label: 'About me',
    icon: 'i-lucide-user',
    to: '/about',
  },
  {
    label: 'Download CV',
    icon: 'i-lucide-cloud-download',
    to: '/paulbarrettcouk_cv.pdf',
    target: '_blank',
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
            <NuxtImg src="/img/pblogodark.png" height="50px" width="auto" alt="PB logo" ></NuxtImg>
          </NuxtLink>
          
          <UNavigationMenu :items="items" class="w-full justify-end align-center" />
        </header>
        <div class="blue-container gap-4 md:columns-3">
          <nav class="lhs max-w-10">
            <NuxtImg src="/img/tall_profile.jpg" class="profile-pic" alt="Picture of Paul wearing sunglasses" ></NuxtImg>
          </nav>
          <section class="rhs">
            <NuxtPage />
          </section>
        </div>
        <footer class="p-10 text-center">
          <small class="text-gray-400">Paul Barrett 2025. Site built with Nuxt and hosted on Github Pages.</small>
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
.profile-pic {
  border-radius: 40px;
}
</style>