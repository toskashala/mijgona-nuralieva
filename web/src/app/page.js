"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import {
  heroQuery,
  aboutQuery,
  experiencesQuery,
  servicesQuery,
} from "../../sanity/lib/queries";
import { client } from "../../sanity/lib/client";

export default function Home() {
  const [data, setData] = useState({
    hero: null,
    about: null,
    experiences: [],
    services: [],
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

          const experiencesData = await client.fetch(experiencesQuery);

          const servicesData = await client.fetch(servicesQuery);

          setData({
            hero: heroData,
            about: aboutData,
            experiences: experiencesData || [],
            services: servicesData || [],
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
      <div className="min-h-screen flex items-center justify-center">
        Loading...
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
      <Services services={data.services} />
      {data.about && <About {...data.about} />}
      <Experience experiences={data.experiences} />
      <Contact />
    </main>
  );
}
