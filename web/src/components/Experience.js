"use client";

export default function Experience({ experiences = [] }) {
  // Split into two halves
  const left = experiences.filter((_, i) => i % 2 === 0);
  const right = experiences.filter((_, i) => i % 2 === 1);

  return (
    <section id="experience" className="pt-0 pb-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="flex items-center gap-2 mb-10">
          <div className="h-8 w-1.5 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full" />
          <h2 className="text-xl md:text-3xl font-bold">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 relative">
          {/* LEFT TIMELINE */}
          <div className="relative">
            {/* vertical line: SAME left offset used by the pin */}
            <div className="absolute left-6 top-0 bottom-0 border-l-2 border-neutral-200" />

            <div className="flex flex-col gap-12">
              {left.map((exp, i) => (
                <div key={i} className="relative pl-14">
                  {/* Pin: placed at left-6 and translated -50% to center over the line */}
                  <div className="absolute left-6 top-4 -translate-x-1/2 w-4 h-4 bg-pink-500 border-4 border-white rounded-full shadow-md" />

                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-200 hover:border-neutral-700 transition">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm mb-2">
                      <span className="font-medium">{exp.company}</span> •{" "}
                      {exp.period}
                    </p>
                    <p className="leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">
            {/* vertical line for right column — same left offset */}
            <div className="absolute left-6 top-0 bottom-0 border-l-2 border-neutral-200" />

            <div className="flex flex-col gap-12">
              {right.map((exp, i) => (
                <div key={i} className="relative pl-14">
                  <div className="absolute left-6 top-4 -translate-x-1/2 w-4 h-4 bg-pink-500 border-4 border-white rounded-full shadow-md" />
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-200 hover:border-neutral-700 transition">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-neutral-700 text-sm mb-2">
                      <span className="font-medium">{exp.company}</span> •{" "}
                      {exp.period}
                    </p>
                    <p className="text-neutral-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
