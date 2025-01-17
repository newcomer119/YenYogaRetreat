import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '9u6rg8r9',
  dataset: 'production',
  apiVersion: '2024-03-21',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
} 