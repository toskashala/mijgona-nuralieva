'use client';

export default function Experience({ experiences = [] }) {

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4">
                <span className="font-medium">{exp.company}</span>
                <span className="hidden sm:block mx-2">•</span>
                <span>{exp.period}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
