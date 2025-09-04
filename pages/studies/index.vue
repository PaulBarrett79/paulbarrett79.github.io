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
        <li v-for="post in studies" :key="post.id">
          <NuxtLink :to="post.path">
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
