"use client";

export default function QuoteBanner({ quote, author }) {
  return (
    <section className="relative w-full py-12 bg-pink-600 my-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Quote in normal font */}
        <p className="text-white text-xl md:text-2xl font-thin leading-snug">
          “{quote}”
        </p>

        {/* Author in thin handwritten font */}
        {author && (
          <span className="block mt-3 text-white/80 text-sm md:text-base font-handwriting font-thin leading-tight tracking-tight">
            — {author}
          </span>
        )}
      </div>
    </section>
  );
}
