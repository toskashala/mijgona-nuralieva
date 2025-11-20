"use client";

import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function LanguageMap() {
  const [geographyData, setGeographyData] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(geoUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setGeographyData(data))
      .catch((err) => {
        console.error("Error loading map data:", err);
        setError("Failed to load map data.");
      });
  }, []);

  const languageCountries = {
    English: ["United Kingdom", "United States of America"],
    Russian: ["Russia"],
    Chinese: ["China"],
    Farsi: ["Tajikistan"],
  };

  const livedCountries = ["United States of America", "Tajikistan", "China", "Ukraine", "Czechia"];

  // Flatten language data for tooltip
  const countryToLanguages = {};
  Object.entries(languageCountries).forEach(([lang, countries]) => {
    countries.forEach((c) => {
      if (!countryToLanguages[c]) countryToLanguages[c] = [];
      countryToLanguages[c].push(lang);
    });
  });

  // Combine all highlighted countries
  const highlightedCountries = [
    ...Object.values(languageCountries).flat(),
    ...livedCountries,
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
            Languages & Countries
          </h2>
          <p className="text-gray-600 max-w-md">
            I speak 5 languages and have lived in several countries. Hover over the highlighted countries to explore.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
          {Object.keys(languageCountries).map((lang) => (
            <span
              key={lang}
              className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-600 to-pink-800 text-white text-sm font-medium shadow"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full border rounded-2xl shadow-lg p-4 bg-white relative">
        {error ? (
          <div className="h-96 flex items-center justify-center text-red-500">{error}</div>
        ) : !geographyData ? (
          <div className="h-96 flex items-center justify-center">
            <div className="animate-pulse text-gray-400">Loading map...</div>
          </div>
        ) : (
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 120, center: [20, 20] }}
            width={800}
            height={500}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geographyData}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName =
                    geo.properties.name || geo.properties.NAME || geo.properties.NAME_LONG;
                  const isHighlighted = highlightedCountries.includes(countryName);

                  let fillColor = "#E5E7EB"; // default
                  if (livedCountries.includes(countryName)) fillColor = "#3B82F6"; // blue
                  else if (countryToLanguages[countryName]) fillColor = "#DB2777"; // pink

                  return (
                    <motion.g key={geo.rsmKey}>
                      <Geography
                        geography={geo}
                        fill={fillColor}
                        stroke="#FFF"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: isHighlighted
                              ? fillColor === "#DB2777"
                                ? "#9D174D"
                                : "#2563EB"
                              : fillColor,
                            outline: "none",
                            cursor: isHighlighted ? "pointer" : "default",
                          },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={() => isHighlighted && setHovered(countryName)}
                        onMouseLeave={() => setHovered(null)}
                      />
                    </motion.g>
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        )}

        {/* Tooltip */}
        {hovered && (
          <div className="absolute top-2 left-2 bg-white px-3 py-2 rounded-md shadow-lg text-sm text-gray-800 border border-gray-200 pointer-events-none">
            <p className="font-semibold">{hovered}</p>
            {countryToLanguages[hovered] && (
              <p>Languages: {countryToLanguages[hovered].join(", ")}</p>
            )}
            {livedCountries.includes(hovered) && <p>I&apos;ve lived here</p>}
          </div>
        )}
      </div>
    </section>
  );
}