export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Degree/Diploma',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'school',
      title: 'School/Institution',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'period',
      title: 'Study Period',
      type: 'string',
      description: 'e.g. 2018 — 2021',
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort the education items (lower numbers appear first)',
      initialValue: 0
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Most Recent',
      name: 'dateDesc',
      by: [
        {field: 'period', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'school',
      period: 'period'
    },
    prepare(selection) {
      const {title, subtitle, period} = selection
      return {
        title: title,
        subtitle: `${subtitle} (${period})`
      }
    }
  }
}
