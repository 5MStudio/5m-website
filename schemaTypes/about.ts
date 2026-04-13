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
      of: [
        defineField({
          type: 'object',
          name: 'contactItem',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string', description: 'Display text, e.g. hello@studio.com' }),
            defineField({ name: 'email', title: 'Email Address', type: 'string', description: 'e.g. hello@studio.com' }),
          ],
          preview: { select: { title: 'label' } },
        }),
      ],
      description: 'Contact email addresses',
    }),
    defineField({
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'platformItem',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string', description: 'Display text, e.g. Instagram' }),
            defineField({ name: 'url', title: 'URL', type: 'url', description: 'e.g. https://instagram.com/studio' }),
          ],
          preview: { select: { title: 'label' } },
        }),
      ],
      description: 'Social platforms with links',
    }),
  ],
})