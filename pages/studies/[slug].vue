<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`studies-${slug}`, () => {
  return queryCollection('studies').path(`/studies/${slug}`).first()
})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer :value="post" />
</template>
