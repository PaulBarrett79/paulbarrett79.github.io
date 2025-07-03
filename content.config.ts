import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        date: z.string()
      })
    }),
    studies: defineCollection({
      type: 'page',
      source: 'studies/*.md',
      schema: z.object({
        date: z.string(),
        thumb: z.string(),
      })
    }),
  }
})