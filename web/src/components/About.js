"use client";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

export default function About({
  title,
  subtitle,
  description1,
  description2,
  description3,
  skills = [],
  profileImage,
}) {
  return (
    <section id="about" className="pt-8 md:pt-12 pb-0">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title={title} />

        <div className="grid md:grid-cols-2 gap-2 md:gap-12 items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                {subtitle}
              </h3>

              <div className="space-y-5 leading-relaxed mb-6">
                <p>{description1}</p>
                <p>{description2}</p>
                <p>{description3}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs md:text-sm border border-brown-300 bg-brown-50 text-brown-600 rounded-full hover:bg-brown-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-brown-200 h-full flex max-h-[520px]">
            <Image
              src={profileImage}
              alt="Profile"
              width={520}
              height={620}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
