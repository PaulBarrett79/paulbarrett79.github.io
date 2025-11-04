<script setup>
const { data: studies } = await useAsyncData("studies", () =>
  queryCollection("studies").all()
);
</script>

<template>
  <div>
    <h1 class="pl-10">Here are my case studies.</h1>
    <div class="pl-10 sm:w-[400px] md:w-[800px]">
      <ul class="pt-10">
        <li v-for="post in studies" :key="post.id" class="cardycard">
          <NuxtLink :to="post.path" class="ingore-link-animations">
            <BlogPostThumb>
              <template #thumb>
                <NuxtImg :src="post.thumb" fit="cover" width="800" height="450" />
              </template>
              <template #title>
                {{ post.title }}
              </template>
              <template #subtitle>
                {{ post.description }}
              </template>
            </BlogPostThumb>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  .cardycard {
    opacity: 1;
    transition: all 0.6s ease-in-out;
    &:nth-child(1) {
      transition-delay: 0.4s;
    }
    &:nth-child(2) {
      transition-delay: 0.8s;
    }
    &:nth-child(3) {
      transition-delay: 1.2s;
    }
    &:nth-child(4) {
      transition-delay: 1.6s;
    }
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
