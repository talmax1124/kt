import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
  projectId: '9uj5y2w4',
  dataset: 'production',
})

function urlFor(source) {
  return builder.image(source)
}

export default defineConfig({
  name: 'default',
  title: 'Knight Times News Blog',
  tagline: 'Knight Times News Blog',
  projectId: '9uj5y2w4',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,

  // Use the imageURLBuilder to generate a URL for an image
  // https://www.sanity.io/docs/image-url
  imageUrlBuilder: urlFor,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
