export default {
  name: 'course',
  title: 'Courses',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'price',
      title: 'Price',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'image',
      title: 'Course Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'en',
              title: 'English',
              type: 'string'
            },
            {
              name: 'vi',
              title: 'Vietnamese',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Set to false to hide this course',
      initialValue: true
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'image'
    }
  }
} 