<script setup>
import { NuxtImg, NuxtLink } from '#components';


  const { data: studies } = await useAsyncData('studies', () => queryCollection('studies').all())
</script>

<template>
  <div class="pl-10">
    <h1>Here are my case studies.</h1>
    <ul class="pt-10">
      <li v-for="post in studies" :key="post.id">
        <BlogPostThumb>
          <template #thumb>
            <NuxtImg :src="post.thumb" fit="cover" width="800" height="450"></NuxtImg>
          </template>
          <template #title>
           <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>  
          </template>
          <template #subtitle>
            {{ post.description }}
          </template>
        </BlogPostThumb>
        
      </li>
    </ul>
  </div>
    
</template>
