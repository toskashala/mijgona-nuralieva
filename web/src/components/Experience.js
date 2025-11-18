'use client';

export default function Experience({ experiences = [] }) {
  return (
    <section id="experience" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section title with accent */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-10 w-1.5 bg-neutral-900 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 drop-shadow-sm">
            Experience
          </h2>
        </div>

        {/* Grid with 2 cards per row */}
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-neutral-300 hover:shadow-xl hover:border-neutral-900 transition-all duration-500"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-neutral-900 rounded-r-full shadow-[0_0_10px_2px_rgba(0,0,0,0.1)]"></div>

              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">{exp.title}</h3>

              <div className="flex flex-col sm:flex-row sm:items-center text-neutral-500 mb-4 text-sm">
                <span className="font-medium">{exp.company}</span>
                <span className="hidden sm:block mx-2">•</span>
                <span>{exp.period}</span>
              </div>

              <p className="text-neutral-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}