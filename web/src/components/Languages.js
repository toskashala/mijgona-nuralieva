"use client";

import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

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
    Russian: [
      "Russia",
      "Ukraine",
      "Kazakhstan",
      "Kyrgyzstan",
      "Belarus",
      "Uzbekistan",
      "Tajikistan",
      "	Turkmenistan",
    ],
    Chinese: ["China"],
    Farsi: ["Tajikistan"],
  };

  const livedCountries = [
    "United States of America",
    "Tajikistan",
    "China",
    "Ukraine",
    "Czechia",
  ];

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
    <section className="p-10 max-w-6xl mx-auto mt-3">
      <SectionHeader title="Languages & Countries" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Map */}
        <div className="w-full lg:w-1/2">
          <div className="border rounded-2xl shadow-lg p-4 bg-white relative h-full">
            {error ? (
              <div className="h-96 flex items-center justify-center text-red-500">
                {error}
              </div>
            ) : !geographyData ? (
              <div className="h-96 flex items-center justify-center">
                <div className="animate-pulse text-gray-400">
                  Loading map...
                </div>
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
                        geo.properties.name ||
                        geo.properties.NAME ||
                        geo.properties.NAME_LONG;
                      const isHighlighted =
                        highlightedCountries.includes(countryName);

                      let fillColor = "#E5E7EB"; // default
                      if (livedCountries.includes(countryName))
                        fillColor = "#7b5342ff"; // brown dark
                      else if (countryToLanguages[countryName])
                        fillColor = "#caafa1ff"; // brown

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
                                  ? fillColor === "#caafa1ff" ||
                                    fillColor === "#7b5342ff"
                                    ? "#ad806aff"
                                    : fillColor
                                  : fillColor,
                                outline: "none",
                                cursor: isHighlighted ? "pointer" : "default",
                              },
                              pressed: { outline: "none" },
                            }}
                            onMouseEnter={() =>
                              isHighlighted && setHovered(countryName)
                            }
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
              <div className="absolute top-2 left-2 bg-white px-3 py-2 rounded-md shadow-lg text-sm border border-gray-200 pointer-events-none">
                <p className="font-semibold">{hovered}</p>
                {countryToLanguages[hovered] && (
                  <p>Languages: {countryToLanguages[hovered].join(", ")}</p>
                )}
                {livedCountries.includes(hovered) && (
                  <p>I&apos;ve lived here</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
            <h3 className="text-xl font-semibold mb-4">My Language Journey</h3>
            <p className="mb-6">
              I&apos;m fluent in 5 languages and have had the privilege of
              living in several countries, which has given me a deep
              appreciation for different cultures and perspectives.
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-medium mb-3">Languages I Speak:</h4>
              <div className="flex flex-wrap gap-2">
                {Object.keys(languageCountries).map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-1 rounded-full bg-gradient-to-r from-brown-600 to-brown-800 text-white text-sm font-medium shadow"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-medium mb-2">Map Legend:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-[#7b5342ff] rounded-full mr-2"></span>
                  <span>Countries I&apos;ve lived in</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-[#caafa1ff] rounded-full mr-2"></span>
                  <span>Countries where my languages are spoken</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
