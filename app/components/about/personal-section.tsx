'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { MontserratFont } from "app/ui/fonts";

gsap.registerPlugin(ScrollTrigger);

const personalInterests = [
    {
        emoji: "✈️",
        title: "Travel",
        description: "I'm down to travel anywhere—as long as there are no giant insects. Other than that, I'm easily moved by the beauty of any place I visit."
    },
    {
        emoji: "🏀",
        title: "Basketball",
        description: "I've loved basketball since I was a student. I still play a game once a week and catch NBA highlights occasionally."
    },
    {
        emoji: "🎮",
        title: "Video Games",
        description: "I prefer solo, chilled-out gaming. I usually stick to steady-seller titles in action, RPG, or turn-based simulation genres."
    },
    {
        emoji: "🍳",
        title: "Cooking",
        description: "I mostly cook Korean food but occasionally challenge myself with Western dishes. If you come over to my house, I can treat you to some home-cooked Korean food!"
    },
    {
        emoji: "📚",
        title: "Books",
        description: "I have quite specific tastes: for fiction, I stick to Fantasy and Sci-Fi. Otherwise, I enjoy Economics, Business, Humanities, Self-Improvement, and History."
    },
    {
        emoji: "🔌",
        title: "Gadgets & Tech",
        description: "I'm fascinated by the latest gadgets like drones, VR, and AR glasses. I wish I could afford them all... but reality (and my wife) says otherwise! 🥲"
    }
];

export default function PersonalSection() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        tl.fromTo(".personal-card",
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {personalInterests.map((item) => (
                    <div
                        key={item.title}
                        className="personal-card p-5 rounded-xl border border-neutral-200 bg-white hover:border-amber-200 hover:shadow-md transition-all"
                    >
                        <span className="text-2xl mb-2 block">{item.emoji}</span>
                        <h3 className={`font-bold text-neutral-900 ${MontserratFont.className} mb-1`}>
                            {item.title}
                        </h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
