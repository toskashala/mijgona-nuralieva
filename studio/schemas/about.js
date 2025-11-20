export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: 'The title of the about section (e.g., "About Me")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload a professional profile photo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Professional Title",
      type: "string",
      description:
        'Your professional title (e.g., "Marketing & Product Professional")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description1",
      title: "First Paragraph",
      type: "text",
      description: "First paragraph of your about section",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description2",
      title: "Second Paragraph",
      type: "text",
      description: "Second paragraph of your about section",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      description: "List of your skills/expertise areas",
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required().min(3).max(15),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "profileImage",
    },
  },
};
