'use client';

import { useEffect, useRef, useState } from 'react';

export default function Services({ services = [] }) {
  const serviceRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.slice(0, services.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    serviceRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [services.length]);

  return (
    <section id="services" className="relative overflow-hidden pt-0 pb-28">
      <div className="max-w-6xl mx-auto px-4 relative">

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              data-index={index}
              className={`
                relative flex flex-col h-full bg-white rounded-2xl shadow-lg border border-neutral-300 overflow-hidden
                transition-transform duration-700 ease-out opacity-0
                ${visible[index] ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-24' : 'translate-x-24'}
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/30 hover:border-white
              `}
            >
              {/* Neon top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x hover:animate-gradient-fast"></div>

              {/* Service content */}
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-700 mb-4">{service.description}</p>
              </div>

              {/* Features */}
              <div className="px-6 pb-6 pt-2">
                <h4 className="text-sm font-medium text-neutral-500 mb-2 tracking-wide uppercase">
                  Key Features:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-200/70 hover:bg-blue-400/30 text-neutral-900 hover:text-white rounded-full text-xs font-medium transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% }
          100% { background-position: 200% }
        }
        @keyframes gradient-fast {
          0% { background-position: 0% }
          100% { background-position: 250% }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 4s linear infinite;
        }
        .hover\\:animate-gradient-fast:hover {
          animation: gradient-fast 2s linear infinite;
        }
      `}</style>
    </section>
  );
}