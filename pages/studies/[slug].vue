<script setup>

const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`studies-${slug}`, () => {
  return queryCollection('studies').path(`/studies/${slug}`).first()
})
</script>

<template>
   <div class="px-4">
      <section class="intro">
          <UButton icon="i-lucide-chevron-left" variant="link" class="link is-white white text-sm" @click="$router.back()">
            Back
          </UButton>
          <h1>{{ post.title }}</h1>
          <em>{{ post.description }}</em>
      </section>
      <section class="main">
        <ContentRenderer :value="post" />
      </section>
   </div>
</template>

<style scoped lang="scss">
.intro {
  margin-bottom: 40px;
  h1 {
    margin-bottom: 30px;
  }
}
a {
  cursor: pointer;
}
.main {
  display: flex;
  max-width: 900px;
}
img.data-nuxt-img {
  margin: 0 auto;
}
</style>