'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Marketing Automation Platform',
      description: 'A comprehensive marketing automation solution for B2B companies to streamline their marketing efforts.',
      tags: ['B2B Marketing', 'Automation', 'SaaS']
    },
    {
      id: 2,
      title: 'E-commerce Growth Strategy',
      description: 'Developed and executed a growth strategy for an e-commerce platform resulting in 150% revenue increase.',
      tags: ['Digital Strategy', 'E-commerce', 'Growth Marketing']
    },
    {
      id: 3,
      title: 'Product Launch Campaign',
      description: 'Led a cross-functional team to successfully launch a new SaaS product with 200+ signups in the first month.',
      tags: ['Product Marketing', 'Campaign Management', 'Go-to-Market']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
