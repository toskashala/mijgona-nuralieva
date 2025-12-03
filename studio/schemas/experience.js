export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      description: "e.g., Senior Product Marketing Manager",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      description: "Name of the company",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "period",
      title: "Employment Period",
      type: "string",
      description: "e.g., 2020 - Present",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Job Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" }
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" }
        ]
      }
    }
  ],
  description: "Add your job description with formatting options",
  validation: (Rule) => Rule.required(),
},
    {
      name: "skills",
      title: "Skills Used",
      type: "array",
      of: [{ type: "string" }],
      description: "Key skills utilized in this role",
      options: {
        layout: "tags",
      },
    },
  ],
  orderings: [
    {
      title: "Most Recent First",
      name: "periodDesc",
      by: [{ field: "period", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "company",
      period: "period",
    },
    prepare(selection) {
      const { title, subtitle, period } = selection;
      return {
        title: title,
        subtitle: `${subtitle} (${period})`,
      };
    },
  },
};
