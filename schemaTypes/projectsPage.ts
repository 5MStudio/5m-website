// schemaTypes/projectsPage.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  fields: [
    defineField({
      name: 'orderedProjects',
      title: 'Ordered Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      description: 'Drag projects here to set their display order on the Projects page',
    }),
  ],
})