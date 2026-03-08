
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'pdefault',
  title: '5M Website',

  projectId: 'p8hrggg4', // <-- replace with your actual projectId
  dataset: 'production',

  // Add this line to set your Sanity Studio subdomain
  hostname: '5m-studio', // <-- this will make your URL https://5m-studio.sanity.studio

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})