// schemaTypes/project.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    // ───────────────────
    // Basic info
    // ───────────────────
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // ✅ SLUG FIELD ADDED HERE
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'string',
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
        },
      ],
    }),

    // ───────────────────
    // Thumbnail with selectable ratio
    // ───────────────────
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'ratio',
          title: 'Thumbnail Ratio',
          type: 'string',
          options: {
            list: [
              { title: 'Landscape 16:9', value: 'landscape' },
              { title: 'Portrait 4:5', value: 'portrait' },
            ],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // ───────────────────
    // Selected flag for homepage
    // ───────────────────
    defineField({
      name: 'selected',
      title: 'Selected for Homepage',
      type: 'boolean',
      initialValue: false,
    }),

    // ───────────────────
    // Hero
    // ───────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'desktopImage',
          title: 'Desktop Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'desktopVideo',
          title: 'Desktop Video',
          type: 'file',
          options: { accept: 'video/*' },
        }),
        defineField({
          name: 'mobileImage',
          title: 'Mobile Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'mobileVideo',
          title: 'Mobile Video',
          type: 'file',
          options: { accept: 'video/*' },
        }),
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
        {
          type: 'object',
          name: 'textBlock',
          title: 'Text',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
        {
          type: 'object',
          name: 'galleryBlock',
          title: 'Gallery',
          fields: [
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    {
                      name: 'title',
                      title: 'Image Title',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  { title: 'Full width', value: 'full' },
                  { title: 'Two side by side', value: 'two' },
                  { title: 'Grid (up to 4)', value: 'grid' },
                ],
                layout: 'radio',
              },
            },
          ],
        },
        // ───────────────────
        // Single Image (50% width)
        // ───────────────────
        defineField({
          type: 'object',
          name: 'singleImageBlock',
          title: 'Single Image (50% width)',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'title',
              title: 'Image Title',
              type: 'string',
            }),
            defineField({
              name: 'alignment',
              title: 'Alignment',
              type: 'string',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Center', value: 'center' },
                  { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
              },
              initialValue: 'left',
            }),
          ],
        }),
        // ───────────────────
        // NEW: Fullscreen Image (100% width)
        // ───────────────────
        defineField({
          type: 'object',
          name: 'fullImageBlock',
          title: 'Single Image (100% width)',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'title',
              title: 'Image Title',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})