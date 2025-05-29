import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    studies: defineCollection({
      type: 'page',
      source: 'studies/*.md'
    }),
  }
})