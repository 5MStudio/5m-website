// schemaTypes/homepage.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  // no title field, only fields editors should edit
  fields: [
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
  ],
})