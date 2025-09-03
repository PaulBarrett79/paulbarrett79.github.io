<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <h1 class="px-4">
      Hi my name is Paul Barrett and this is my portfolio site. Welcome!
    </h1>
    <h2 class="px-4 mt-2 md:mt-20">
      I’ve been a full stack dev, front end developer, UX developer, UX designer and loads
      of other things
    </h2>
    <section id="experience" class="flex justify-between p-4">
      <UCard class="m-2 text-center content-between">
        <div class="flex grow justify-center mb-4">
          <UIcon name="i-lucide-notebook" class="text-black custom-iconify" />
          <UIcon name="i-lucide-pencil" class="text-black custom-iconify" />
        </div>
        <div class="flex shrink">
          <span class="text-gray-700 text-sm"
            >Wireframing and ideation in Miro and Figjam (and paper!)</span
          >
        </div>
      </UCard>
      <UCard class="m-2 text-center content-between text-xl">
        <div class="flex grow justify-center mb-4">
          <UIcon name="i-lucide-figma" class="text-black custom-iconify" />
          <UIcon name="i-lucide-workflow" class="text-black custom-iconify" />
        </div>
        <div class="flex shrink">
          <span class="text-gray-700 text-sm"
            >Prototyping and design system construction in Figma</span
          >
        </div>
      </UCard>
      <UCard class="m-2 text-center content-end">
        <div class="flex grow justify-center mb-4">
          <UIcon name="i-lucide-terminal" class="text-black custom-iconify" />
          <UIcon name="i-lucide-braces" class="text-black custom-iconify" />
        </div>
        <div class="flex shrink">
          <span class="text-gray-700 text-sm"
            >Front end development in Vue/Nuxt as well as React</span
          >
        </div>
      </UCard>
      <UCard class="m-2 text-center content-end">
        <div class="flex grow justify-center mb-4">
          <UIcon name="i-lucide-code-xml" class="text-black custom-iconify" />
          <UIcon name="i-lucide-paint-roller" class="text-black custom-iconify" />
        </div>
        <div class="flex shrink">
          <span class="text-gray-700 text-sm"
            >Good old classic HTML and loads of CSS experience</span
          >
        </div>
      </UCard>
    </section>
    <p class="px-4 mt-2">
      I have worn quite a few hats - UX design, interaction design, wireframing and
      prototyping, UX research and reporting directly to stakeholders as well as
      evangelising for UX in more aspects of the business. Add to that getting my hands
      dirty with VueJS and design systems and you can see I’ve worked right across the web
      ecosystem.
    </p>
    <div class="flex px-4 mt-4">
      <NuxtLink color="secondary" to="/studies" class="mr-4 px-2 flex items-center">
        <UIcon name="i-lucide-notebook" /><span class="font-bold">Case Studies</span>
      </NuxtLink>
      <NuxtLink color="secondary" to="/about" class="mr-2 px-2 flex items-center">
        <UIcon name="i-lucide-user" /><span class="font-bold">About me</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.custom-iconify {
  width: 40px;
  height: 40px;
}
</style>
