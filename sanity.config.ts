// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision' // ← add this
import { muxInput } from 'sanity-plugin-mux-input'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: '5M Studio',

  projectId: 'p8hrggg4',
  dataset: 'production',

  plugins: [
    structureTool(),
    muxInput({
      // optional settings here
    }),
    visionTool(), // ← add this
  ],

  schema: {
    types: schemaTypes,
  },
})


