export default {
    name: 'project',
    title: 'Work / Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Project Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'link',
        title: 'Project Link',
        type: 'url',
      },
    ],
  }