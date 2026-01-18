'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const interests = [
  {
    emoji: "💻",
    title: "Software Developer",
    description: "Full-stack web & mobile app development",
    color: "from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100",
    isApple: false
  },
  {
    emoji: "✈️",
    title: "Traveler",
    description: "Enjoy exploring the world",
    color: "from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100",
    isApple: false
  },
  {
    emoji: "🍜",
    title: "Cooker",
    description: "Love cooking Korean, Western & Japanese cuisine",
    color: "from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100",
    isApple: false
  },
  {
    emoji: "",
    title: "Apple Ecosystem Prisoner",
    description: "iPhone, Mac, Watch, AirPods... Can't escape anymore 🔒",
    color: "from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100",
    isApple: true
  },
  {
    emoji: "🎮",
    title: "Video Gamer",
    description: "RPG, Action, Adventure & Simulation games",
    color: "from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100",
    isApple: false
  },
  {
    emoji: "🐉",
    title: "Fantasy & Sci-Fi Fan",
    description: "Love fantasy & sci-fi novels, movies & books",
    color: "from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100",
    isApple: false
  },
  {
    emoji: "🏀",
    title: "Basketball Fan",
    description: "NBA enthusiast & weekend player",
    color: "from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100",
    isApple: false
  },
  {
    emoji: "🏊",
    title: "Swimmer",
    description: "Weekly swimming routine",
    color: "from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100",
    isApple: false
  },
  {
    emoji: "🌌",
    title: "Space Enthusiast",
    description: "Fascinated by cosmos & universe",
    color: "from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100",
    isApple: false
  },
  {
    emoji: "🏛️",
    title: "History & Anthropology",
    description: "Passionate about human history & culture",
    color: "from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100",
    isApple: false
  },
];

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-8 md:py-12">
      <motion.h1 
        className="mb-8 md:mb-16 font-bold text-4xl md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        About me
      </motion.h1>

      <motion.p
        className="mb-12 max-w-3xl text-neutral-600 text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Software developer with <strong>+10 years</strong> experience working at large corporations and running own startups. Based in Montreal.
      </motion.p>

      <div className="gap-4 md:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className={`p-6 rounded-2xl border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-neutral-300 hover:bg-neutral-50`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {interest.isApple ? (
                <div className="mb-3">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
              ) : (
                <div className="mb-3 text-4xl">{interest.emoji}</div>
              )}
              <h3 className="mb-2 font-semibold text-neutral-900 text-xl">{interest.title}</h3>
              <p className="text-neutral-600 text-sm">{interest.description}</p>
            </motion.div>
        ))}
      </div>
    </div>
  );
}
