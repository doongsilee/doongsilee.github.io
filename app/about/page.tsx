'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SocialIdentity from "app/components/about/social-identity";
import DeveloperSection from "app/components/about/developer-section";
import StartupSection from "app/components/about/startup-section";
import FreelancerSection from "app/components/about/freelancer-section";
import PersonalSection from "app/components/about/personal-section";
import { OutfitFont } from "app/ui/fonts";

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
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        About me
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-col items-center md:items-center gap-8 md:gap-12 mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative p-1">
          {/* Sophisticated Silver Rotating Border */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-200 via-neutral-100 to-neutral-400 opacity-40"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="relative bg-white rounded-full p-2 flex items-center justify-center shadow-sm">
            <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden shrink-0 rounded-full border-4 border-neutral-50">
              <Image
                src="/images/photo.png"
                alt="Hyunwoo"
                fill
                className="object-cover scale-[1.25] object-top"
                priority
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </div>
        </div>
        <div className={`${OutfitFont.className} flex flex-col items-center text-center`}>
          <h2 className="text-neutral-900 text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-4">
            Hi! I&apos;m Hyunwoo
          </h2>
          <p className="text-neutral-500 text-xl md:text-2xl font-light tracking-tight mb-8">
            Developer & Entrepreneur
          </p>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-sm font-light">
            Born in Korea, currently living in Canada.
          </p>
        </div>
      </motion.div>

      {/* Professional: who I am at work */}
      <div className="mt-8">
        <SocialIdentity />
        <DeveloperSection />
        <StartupSection />
        <FreelancerSection />
      </div>

      {/* Personal: beyond work — clearly separated block */}
      <section className="mt-20 md:mt-28 pt-16 md:pt-20 pb-16 md:pb-20 border-t-2 border-neutral-200 bg-neutral-50/60 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Beyond work</h2>
          <p className="text-neutral-600 mb-12 max-w-2xl">
            Who I am personally—what I love and what keeps me going outside the day job.
          </p>
          <PersonalSection />
        </div>
      </section>
    </div>
  );
}
