'use client';

import Image from 'next/image';

export default function About({ title = 'About Me', subtitle = 'Marketing & Product Professional', description1 = "I'm a results-driven B2B Marketing and Product Management professional with a passion for creating impactful digital experiences.", description2 = 'My approach combines data-driven decision making with creative problem solving to deliver measurable results. I specialize in developing go-to-market strategies, optimizing user journeys, and driving product adoption through targeted marketing initiatives.', skills = [], profileImage = '/profile.jpg' }) {

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={profileImage}
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {subtitle}
            </h3>
            <p className="text-gray-600 mb-6">
              {description1}
            </p>
            <p className="text-gray-600 mb-8">
              {description2}
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
