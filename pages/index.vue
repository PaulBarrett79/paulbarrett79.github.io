<script setup lang="ts">
const cardItems = ref([
  {
    text: "Wireframing and ideation in Miro and Figjam (and paper!)",
    icons: ["i-lucide-notebook", "i-lucide-pencil"],
  },
  {
    text: "Prototyping and design system construction in Figma",
    icons: ["i-lucide-figma", "i-lucide-workflow"],
  },
  {
    text: "Front end development in Vue/Nuxt as well as React",
    icons: ["i-lucide-terminal", "i-lucide-braces"],
  },
  {
    text: "Good old classic HTML and loads of CSS experience",
    icons: ["i-lucide-code-xml", "i-lucide-paint-roller"],
  },
]);
</script>

<template>
  <div class="flex flex-col">
    <h1 class="px-4">
      Hi my name is Paul Barrett and this is my portfolio site. Welcome!
    </h1>
    <h2 class="px-4 mt-2 md:mt-20">
      I’ve been a full stack dev, front end developer, UX developer, UX designer and loads
      of other things
    </h2>
    <section
      id="experience"
      class="flex justify-between flex-wrap md:flex-nowrap p-4 my-5"
    >
      <template v-for="(cardItem, index) in cardItems" :key="index">
        <UCard
          :class="`cardycard transition delay-${
            index * 400
          } duration-600 ease-in-out m-2 text-center content-between text-xl bg-linear-to-b from-white to-gray-300`"
        >
          <div class="flex grow justify-center mb-4">
            <template v-for="(cardIcon, inddex) in cardItem.icons" :key="inddex">
              <UIcon :name="cardIcon" class="text-black custom-iconify" />
            </template>
          </div>
          <div class="flex shrink">
            <span class="text-gray-700 text-sm">{{ cardItem.text }}</span>
          </div>
        </UCard>
      </template>
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
.page-enter-active,
.page-leave-active {
  .cardycard {
    opacity: 1;
  }
}
.page-enter-from,
.page-leave-to {
  .cardycard {
    opacity: 0;
  }
  filter: blur(1rem);
}
</style>
