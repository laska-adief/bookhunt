"use client";
import LightRays from "@/components/LightRays";
import ShinyText from "@/components/ShinyText";
import { Input } from "@/components/ui/input";
import { useSearchStore } from "@/store/useSearchStore";
import { useState } from "react";

const Hero = () => {
  const { handleSearch } = useSearchStore();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const handleKeyDown = (key: string) => {
    if (key === "Enter" && searchValue) {
      handleSearch(searchValue);
    }
  };

  return (
    <div className="relative w-full h-screen bg-obsidian">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={1.8}
        rayLength={2.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tighter text-center md:text-6xl">
          <span className="text-white">Book</span>
          <ShinyText
            text="Hunt"
            disabled={false}
            speed={3}
            color="text-gold-low"
          />
        </h1>

        <div className="w-full max-w-2xl">
          <Input
            id="search-book"
            placeholder="Search Title, Author, or Publisher..."
            aria-label="Book Search Input"
            value={searchValue}
            onChange={(e) => handleSearchValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e.key)}
            className="px-6 text-lg text-white border-none rounded-full shadow-2xl h-16 md:h-14 md:px-8 bg-white/10 placeholder:text-gray-400 focus:ring-1 focus:ring-cyan-900! focus:ring-offset-2 focus:ring-offset-transparent"
          />
        </div>

        <p className="mt-4 text-sm text-gray-300">
          Discover your next read from over 20 million titles.
        </p>
      </div>
    </div>
  );
};

export default Hero;
