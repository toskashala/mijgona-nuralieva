export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      description: 'Your professional headline (e.g., "Frontend Developer")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "text",
      description: "A short description that appears below your name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ctaButton",
      title: "Call to Action Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "url",
          title: "URL",
          type: "string",
          description: "e.g., /about or #contact",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
