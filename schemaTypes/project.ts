import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineField({
          type: 'string',
          name: 'service',
          options: {
            list: [
              { title: 'Architecture', value: 'Architecture' },
              { title: 'Interiors', value: 'Interiors' },
              { title: 'Product Design', value: 'Product Design' },
              { title: 'Spatial Design', value: 'Spatial Design' },
              { title: 'Brand Identity', value: 'Brand Identity' },
              { title: 'Creative Direction', value: 'Creative Direction' },
              { title: 'Image Creation', value: 'Image Creation' },
              { title: 'Motion', value: 'Motion' },
            ],
          },
        }),
      ],
    }),

    // ───────────────────
    // Thumbnail
    // ───────────────────
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'ratio', title: 'Thumbnail Ratio', type: 'string', options: {
          list: [
            { title: 'Landscape 16:9', value: 'landscape' },
            { title: 'Portrait 4:5', value: 'portrait' },
          ], layout: 'radio',
        }, validation: (Rule) => Rule.required() }),
        defineField({ name: 'video', title: 'Thumbnail Video', type: 'mux.video' }),
      ],
    }),

    // ───────────────────
    // Hero
    // ───────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'desktopImage', title: 'Desktop Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'desktopVideo', title: 'Desktop Video', type: 'mux.video' }),
        defineField({ name: 'mobileImage', title: 'Mobile Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'mobileVideo', title: 'Mobile Video', type: 'mux.video' }),
      ],
    }),

    // ───────────────────
    // Content blocks
    // ───────────────────
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'textBlock',
          title: 'Text',
          fields: [ defineField({ name: 'text', title: 'Text', type: 'array', of: [{ type: 'block' }] }) ],
        }),
        defineField({
          type: 'object',
          name: 'galleryBlock',
          title: 'Gallery',
          fields: [
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                defineField({
                  type: 'image',
                  name: 'image',
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: 'title', title: 'Image Title', type: 'string' }),
                    defineField({ name: 'video', title: 'Gallery Image Video', type: 'mux.video' }),
                  ],
                }),
              ],
            }),
            defineField({
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: { list: [
                { title: 'Full width', value: 'full' },
                { title: 'Two side by side', value: 'two' },
                { title: 'Grid (up to 4)', value: 'grid' },
                { title: 'Single (50% width)', value: 'single' },
                { title: 'Image + Text', value: 'imageText' },
              ] },
            }),
            defineField({
              name: 'alignment',
              title: 'Image Alignment',
              type: 'string',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Center', value: 'center' },
                  { title: 'Right', value: 'right' },
                ],
              },
              initialValue: 'left',
              hidden: ({ parent }) => parent?.layout !== 'single',
            }),
            defineField({
              name: 'imagePosition',
              title: 'Image Position',
              type: 'string',
              options: {
                list: [
                  { title: 'Image Left', value: 'left' },
                  { title: 'Image Right', value: 'right' },
                ],
                layout: 'radio',
              },
              initialValue: 'left',
              hidden: ({ parent }) => parent?.layout !== 'imageText',
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [{ type: 'block' }],
              hidden: ({ parent }) => parent?.layout !== 'imageText',
            }),
          ],
        }),
        defineField({
          type: 'object',
          name: 'singleImageBlock',
          title: 'Single Image (50% width)',
          fields: [
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'title', title: 'Image Title', type: 'string' }),
            defineField({ name: 'alignment', title: 'Alignment', type: 'string', options: {
              list: [
                { title: 'Left', value: 'left' },
                { title: 'Center', value: 'center' },
                { title: 'Right', value: 'right' },
              ]
            }, initialValue: 'left' }),
            defineField({ name: 'video', title: 'Single Image Video', type: 'mux.video' }),
          ],
        }),
        defineField({
          type: 'object',
          name: 'fullImageBlock',
          title: 'Fullscreen Image (100% width)',
          fields: [
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'title', title: 'Image Title', type: 'string' }),
            defineField({ name: 'video', title: 'Fullscreen Video', type: 'mux.video' }),
          ],
        }),
      ],
    }),
  ],
})