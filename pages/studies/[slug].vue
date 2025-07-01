<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`studies-${slug}`, () => {
  return queryCollection('studies').path(`/studies/${slug}`).first()
})
</script>

<template>
   <div>
      <section class="intro">
          <a class="button is-white text-sm" @click="$router.back()">
            Back
          </a>
          <h1>{{ post.title }}</h1>
          <em>{{ post.description }}</em>
      </section>
      <section class="main">
        <ContentRenderer :value="post" />
      </section>
   </div>
</template>

<style scoped>
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
blockquote {
  padding: 0 10px;
}
blockquote p {
  font-size: small;
  font-weight: 400;
  font-style: italic;
}
</style>