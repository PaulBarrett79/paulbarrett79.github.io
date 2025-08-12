<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <h1 class="px-4">
      Hi my name is Paul Barrett and I have been doing things with websites since 2006.
    </h1>
    <h2 class="px-4 mt-2 md:mt-20">
      I’ve been a full stack dev, front end developer, UX developer, UX designer and loads
      of other things
    </h2>
    <p class="px-4 mt-2 md:mt-10">I have a lot of experience with:</p>
    <div class="px-4 mt-2">
      <ul class="px-4">
        <li>Wireframing and ideation in Miro and Figjam (and paper!)</li>
        <li>Prototyping and design system construction in Figma</li>
        <li>
          Front end development in Vue/Nuxt - which I used to build this site! - as well
          as React, good old classic HTML and loads of CSS experience
        </li>
      </ul>
    </div>
    <p class="px-4 mt-2">
      I have worn quite a few hats - UX design, interaction design, wireframing and
      prototyping, UX research and reporting directly to stakeholders as well as
      evangelising for UX in more aspects of the business. Add to that getting my hands
      dirty with VueJS and design systems and you can see I’ve worked right across the web
      ecosystem.
    </p>
    <div class="flex px-4 mt-4">
      <UButton
        size="xl"
        color="secondary"
        to="/studies"
        icon="i-lucide-notebook"
        class="mr-2"
      >
        <span class="font-bold">Case Studies</span>
      </UButton>
      <UButton size="xl" color="secondary" to="/about" icon="i-lucide-user" class="mr-2">
        <span class="font-bold">About Me</span>
      </UButton>
    </div>
  </div>
</template>
