<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const open = ref(false);

const items = ref<NavigationMenuItem[]>([
  {
    label: "Case studies",
    icon: "i-lucide-notebook",
    to: "/studies",
    onSelect() {
      open.value = false;
    },
  },
  {
    label: "About me",
    icon: "i-lucide-user",
    to: "/about",
    onSelect() {
      open.value = false;
    },
  },
  {
    label: "Download CV",
    icon: "i-lucide-cloud-download",
    to: "/paulbarrettcouk_cv.pdf",
    target: "_blank",
    onSelect() {
      open.value = false;
    },
  },
  {
    label: "Github",
    icon: "i-simple-icons-github",
    to: "https://github.com/paulbarrett79",
    target: "_blank",
    onSelect() {
      open.value = false;
    },
  },
  {
    label: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    to: "https://www.linkedin.com/in/paul-barrett-89040426/",
    target: "_blank",
    onSelect() {
      open.value = false;
    },
  },
]);
</script>

<template>
  <UApp class="flex grow h-full">
    <UContainer class="md:w-full h-full flex flex-col justify-stretch">
      <header class="flex justify-between items-center">
        <NuxtLink to="/">
          <NuxtImg src="/img/pblogodark.png" height="50px" width="auto" alt="PB logo" />
        </NuxtLink>

        <UNavigationMenu
          :items="items"
          class="hidden md:flex w-full justify-end align-center"
        />
        <USlideover
          v-model:open="open"
          direction="right"
          class="md:hidden"
          title="Menu"
          :close="{
            color: 'neutral',
            variant: 'outline',
            class: 'rounded-full',
          }"
        >
          <UButton size="xl" icon="i-lucide-menu" variant="outline" color="neutral" />
          <template #body>
            <UNavigationMenu
              :items="items"
              orientation="vertical"
              class="justify-start align-start"
            />
          </template>
        </USlideover>
      </header>
      <div class="blue-container flex rounded-[20px] md:rounded-[60px] gap-0 md:gap-1">
        <nav class="lhs shrink md:max-w-10 flex justify-center">
          <NuxtImg
            src="/img/tall_profile.jpg"
            class="max-h-[100px] max-w-fit md:max-h-none rounded-[5px] md:rounded-[40px]"
            alt="Picture of Paul wearing sunglasses"
          />
        </nav>
        <section class="rhs flex flex-col grow">
          <NuxtPage />
        </section>
      </div>
      <footer class="p-10 text-center">
        <small class="text-gray-400"
          >Paul Barrett 2025. Site built with Nuxt and hosted on Github Pages.</small
        >
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
