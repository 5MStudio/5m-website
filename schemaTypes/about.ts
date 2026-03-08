// schemaTypes/about.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'studioText',
      title: 'Studio Text',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Main descriptive text about the studio',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'offices',
      title: 'Offices',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Contact information, could include email, phone, or address',
    }),
    defineField({
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Links or handles for social platforms',
    }),
  ],
})