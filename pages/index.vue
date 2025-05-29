<script setup lang="ts">
const { data: posts } = await useAsyncData('docs', () => queryCollection('docs').all())
const { data: cases } = await useAsyncData('studies', () => queryCollection('studies').all())

</script>

<template>
    <ul>
      <li v-for="post in cases" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        <ContentRenderer v-if="posts" :value="post" />
      </li>
    </ul>
</template>
