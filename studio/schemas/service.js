export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      description: 'e.g., Product Strategy, Digital Marketing',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Used for URLs',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Service Description',
      type: 'text',
      description: 'Brief description of the service',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key features or aspects of this service',
      options: {
        layout: 'tags'
      },
      validation: Rule => Rule.required().min(2).max(5)
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Name of an icon (if using an icon library)',
      options: {
        list: [
          { title: 'Strategy', value: 'strategy' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Analytics', value: 'analytics' },
          { title: 'Design', value: 'design' },
          { title: 'Development', value: 'development' },
          { title: 'Consulting', value: 'consulting' }
        ]
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this service should appear (lower numbers first)',
      initialValue: 0
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Title',
      name: 'title',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon'
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle ? subtitle.substring(0, 50) + '...' : ''
      };
    }
  }
}
