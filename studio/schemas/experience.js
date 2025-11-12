export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'e.g., Senior Product Marketing Manager',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Name of the company',
      validation: Rule => Rule.required()
    },
    {
      name: 'period',
      title: 'Employment Period',
      type: 'string',
      description: 'e.g., 2020 - Present',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text',
      description: 'Brief description of your role and achievements',
      validation: Rule => Rule.required()
    },
    {
      name: 'skills',
      title: 'Skills Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key skills utilized in this role',
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this experience should appear (lower numbers first)',
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
      title: 'Most Recent First',
      name: 'periodDesc',
      by: [{ field: 'period', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
      period: 'period'
    },
    prepare(selection) {
      const { title, subtitle, period } = selection;
      return {
        title: title,
        subtitle: `${subtitle} (${period})`
      };
    }
  }
}
