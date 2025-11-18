"use client";

import Image from "next/image";

export default function About({
  title,
  subtitle,
  description1,
  description2,
  skills = [],
  profileImage,
}) {
  return (
    <section id="about" className="py-24 bg-neutral-700">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title with left accent rail */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-8 w-1.5 bg-white rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE — TEXT */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              {subtitle}
            </h3>

            <div className="space-y-5 leading-relaxed mb-10">
              <p className="text-white">{description1}</p>
              <p className="text-white">{description2}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-neutral-200 mb-3 tracking-wide uppercase">
                Skills
              </h4>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-neutral-600 text-white rounded-xl text-sm font-medium border border-neutral-500 hover:border-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE CARD */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-600">
              {/* subtle futuristic stripe */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/0 via-white/10 to-transparent transform skew-y-6"></div>
              </div>

              <div className="relative h-80 md:h-[420px]">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
