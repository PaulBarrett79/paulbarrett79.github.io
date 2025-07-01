<script setup>
  const { data: studies } = await useAsyncData('studies', () => queryCollection('studies').all())
</script>

<template>
  <div>
    <h1>Here are my case studies</h1>
    <hr>
    <ul>
      <li v-for="post in studies" :key="post.id">
        <BlogPostThumb>
          <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        </BlogPostThumb>
        
      </li>
    </ul>
  </div>
    
</template>
