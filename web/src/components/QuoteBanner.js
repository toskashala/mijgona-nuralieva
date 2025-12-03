"use client";

export default function QuoteBanner({ quote, author }) {
  if (!quote || !author) {
    return null;
  }
  return (
    <section className="relative w-full py-12 bg-cream-50 my-12">
      <div className="max-w-3xl mx-auto px-6 text-center text-brown-900">
        {/* Quote in normal font */}
        <p className="text-xl md:text-2xl font-thin leading-snug">“{quote}”</p>

        {/* Author in thin handwritten font */}
        {author && (
          <span className="block mt-3 text-sm md:text-base font-handwriting font-thin leading-tight tracking-tight">
            — {author}
          </span>
        )}
      </div>
    </section>
  );
}
