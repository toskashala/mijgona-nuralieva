export default {
  name: 'quoteBanner',
  title: 'Quote Banner',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required(),
      description: 'The main quote text to display'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'The author of the quote (optional)'
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Set to true to display this quote banner',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'quote',
      subtitle: 'author',
      active: 'isActive'
    },
    prepare(selection) {
      const {title, subtitle, active} = selection
      return {
        title: title.length > 50 ? `${title.substring(0, 50)}...` : title,
        subtitle: `${subtitle || 'No author'} • ${active ? 'Active' : 'Inactive'}`
      }
    }
  }
}
