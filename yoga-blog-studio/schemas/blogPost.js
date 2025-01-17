export default {
  name: 'blogPost',
  title: 'Blog Posts',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96
      }
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 3
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'text',
          rows: 3
        }
      ]
    },
    {
      name: 'fullContent',
      title: 'Full Content',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 10
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'text',
          rows: 10
        }
      ]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'readingTime',
      title: 'Reading Time',
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
} 