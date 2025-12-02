"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import {
  heroQuery,
  aboutQuery,
  experiencesQuery,
  quoteBannerQuery,
} from "../../sanity/lib/queries";
import { client } from "../../sanity/lib/client";
import QuoteBanner from "@/components/QuoteBanner";

export default function Home() {
  const [data, setData] = useState({
    hero: null,
    about: null,
    experiences: [],
    quoteBanner: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Smooth scroll for anchor links
    if (typeof window !== "undefined") {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for fixed header
              behavior: "smooth",
            });
          }
        });
      });

      // Fetch data from Sanity
      const fetchData = async () => {
        console.log("Starting to fetch data from Sanity...");
        try {
          console.log("Fetching hero data...");
          const heroData = await client.fetch(heroQuery);
          console.log("Hero data:", heroData);

          const aboutData = await client.fetch(aboutQuery);

          const [experiencesData, quoteBannerData] = await Promise.all([
            client.fetch(experiencesQuery),
            client.fetch(quoteBannerQuery),
          ]);

          setData({
            hero: heroData,
            about: aboutData,
            experiences: experiencesData || [],
            quoteBanner: quoteBannerData || null,
          });
        } catch (err) {
          console.error("Error fetching data from Sanity:", err);
          setError(`Failed to load data: ${err.message}`);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-neutral-100 to-neutral-300">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-brown-300 border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-brown-600 border-b-transparent animate-[spin_1.2s_linear_reverse_infinite]"></div>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <main className="min-h-screen">
      {data.hero && <Hero {...data.hero} />}
      {data.about && <About {...data.about} />}
      {data.quoteBanner && <QuoteBanner {...data.quoteBanner} />}
      <Experience experiences={data.experiences} />
      <Contact />
    </main>
  );
}
