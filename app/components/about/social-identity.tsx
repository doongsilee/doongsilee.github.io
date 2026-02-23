'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { MontserratFont } from "app/ui/fonts";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import rocket from "../../../public/anims/Rocket.json";
import money from "../../../public/anims/Money.json";

gsap.registerPlugin(ScrollTrigger);

export default function SocialIdentity() {
    const containerRef = useRef(null);
    const [activeTheme, setActiveTheme] = useState<string | null>(null);
    const [screenWidth, setScreenWidth] = useState(1200);
    const codeRef = useRef(null);
    const rocketRef = useRef(null);
    const moneyRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Start animation when section is in view
                toggleActions: "play none none reverse",
            },
        });

        // Animate Bar Segments
        tl.from(".identity-segment", {
            width: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.75)",
            stagger: 0.2,
        })
            // Fade in text and percents
            .from(".identity-info", {
                opacity: 0,
                y: 20,
                scale: 0.5,
                duration: 0.6,
                ease: "back.out(2)",
                stagger: 0.1,
            }, "-=1.2"); // Overlap with bar animation

    }, { scope: containerRef });

    useGSAP(() => {
        // Developer Theme: Flying Code (Left -> Right)
        if (activeTheme === 'developer') {
            gsap.killTweensOf(codeRef.current);
            const startY = window.innerHeight * 0.4;

            gsap.set(codeRef.current, {
                x: -500,
                y: startY,
                opacity: 1,
                scale: 0.8,
                rotation: -10
            });

            gsap.to(codeRef.current, {
                x: window.innerWidth + 500,
                duration: 5,
                ease: "none",
                repeat: -1,
            });

            gsap.to(codeRef.current, {
                y: startY + 150,
                duration: 1.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });

            gsap.to(codeRef.current, {
                rotation: 10,
                duration: 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }
        // Startup Theme: Flying Rocket (Right -> Left)
        else if (activeTheme === 'startup') {
            gsap.killTweensOf(rocketRef.current);
            const startY = window.innerHeight * 0.2;

            gsap.set(rocketRef.current, {
                x: window.innerWidth + 200,
                y: startY,
                opacity: 1,
                scale: 1,
                rotation: -90
            });

            gsap.to(rocketRef.current, {
                x: -300,
                duration: 4,
                ease: "none",
                repeat: -1,
            });

            gsap.to(rocketRef.current, {
                y: startY + 100,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }
        // Freelancer Theme: Flying Money (Bottom-Left -> Top-Right)
        else if (activeTheme === 'freelancer') {
            gsap.killTweensOf(moneyRef.current);

            gsap.set(moneyRef.current, {
                x: -200, // Left
                y: window.innerHeight + 200, // Bottom
                opacity: 1,
                scale: 1,
                rotation: -45
            });

            gsap.to(moneyRef.current, {
                x: window.innerWidth + 200, // Right
                y: -300, // Top
                duration: 4,
                ease: "power1.out",
                repeat: -1,
            });

            // Floating effect while flying
            gsap.to(moneyRef.current, {
                rotation: 10,
                duration: 1.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }
        else {
            gsap.to(codeRef.current, { opacity: 0, duration: 0.3 });
            gsap.to(rocketRef.current, { opacity: 0, duration: 0.3 });
            gsap.to(moneyRef.current, { opacity: 0, duration: 0.3 });
        }
    }, [activeTheme]);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section ref={containerRef} className="w-full py-8 px-4 md:px-0 relative">

            {/* GSAP Flying Code Element */}
            <div
                ref={codeRef}
                className="fixed left-0 z-50 pointer-events-none whitespace-nowrap text-sm md:text-xl font-mono font-bold text-neutral-600 opacity-0 bg-white/80 px-4 py-2 rounded-lg border border-neutral-200 shadow-xl backdrop-blur-sm"
                style={{ top: 0 }}
            >
                {'const dream = "reality"; while(alive) { code(joy); } 💻'}
            </div>

            {/* GSAP Flying Rocket Element */}
            <div
                ref={rocketRef}
                className="fixed left-0 z-50 pointer-events-none opacity-0 w-32 h-32 md:w-48 md:h-48"
                style={{ top: 0 }}
            >
                <Lottie animationData={rocket} loop={true} />
            </div>

            {/* GSAP Flying Money Element */}
            <div
                ref={moneyRef}
                className="fixed left-0 z-50 pointer-events-none opacity-0 w-32 h-32 md:w-48 md:h-48"
                style={{ top: 0 }}
            >
                <Lottie animationData={money} loop={true} />
            </div>


            <h2 className={`${MontserratFont.className} text-xl md:text-2xl font-bold mb-6`}>
                Who I Am Professionally
            </h2>

            {/* Progress Bar Container */}
            <div className="relative w-full h-10 md:h-14 bg-neutral-100 rounded-full overflow-hidden flex mb-8 shadow-inner">
                {/* Developer Segment - 50% */}
                <div className="identity-segment w-[50%] h-full bg-blue-300 flex items-center justify-center relative group">
                    <span className="absolute text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">50%</span>
                </div>

                {/* Entrepreneur Segment - 30% */}
                <div className="identity-segment w-[30%] h-full bg-purple-300 flex items-center justify-center relative group">
                    <span className="absolute text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">30%</span>
                </div>

                {/* Freelancer Segment - 20% */}
                <div className="identity-segment w-[20%] h-full bg-emerald-300 flex items-center justify-center relative group">
                    <span className="absolute text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">20%</span>
                </div>
            </div>

            {/* Identity Details */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 text-center">

                {/* Developer */}
                <div className="identity-info md:w-[50%] px-4">
                    <div className="text-blue-400 font-bold text-6xl mb-2">50%</div>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">I am a</p>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800 ">Software Developer</h3>
                </div>

                {/* Entrepreneur */}
                <div className="identity-info md:w-[30%] px-4">
                    <div className="text-purple-400 font-bold text-6xl mb-2">30%</div>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">I am a</p>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">Entrepreneur</h3>
                </div>

                {/* Freelancer */}
                <div className="identity-info md:w-[20%] px-4">
                    <div className="text-emerald-400 font-bold text-6xl mb-2">20%</div>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">I am a</p>
                    <h3 className="text-xl font-bold mb-3 text-neutral-800">Freelancer</h3>
                </div>
            </div>
            <div className="mt-12 text-center max-w-4xl mx-auto">
                <p className="text-neutral-600 leading-relaxed text-lg md:text-xl font-medium">
                    "Since I was a student, I've <span className="font-bold text-neutral-900 italic ">dreamed of changing the world with my vision</span>.<br />
                    I realized the fastest way to do that was to build my thoughts into reality myself−so I became a <span
                        className="text-blue-500 font-bold underline decoration-blue-500 underline-offset-4 cursor-help relative z-10 hover:scale-110 transition-transform inline-block"
                        onMouseEnter={() => setActiveTheme('developer')}
                        onMouseLeave={() => setActiveTheme(null)}
                    >
                        Developer
                    </span>.
                    After honing my craft in a big tech company for a while, I dove headfirst into the <span
                        className="text-purple-500 font-bold underline decoration-purple-500 underline-offset-4 cursor-help relative z-10 hover:scale-110 transition-transform inline-block"
                        onMouseEnter={() => setActiveTheme('startup')}
                        onMouseLeave={() => setActiveTheme(null)}
                    >
                        Startup
                    </span> scene and hustling. But reality soon hit, and so did the bills...
                    which naturally led me to become a <span
                        className="text-emerald-500 font-bold underline decoration-emerald-500 underline-offset-4 cursor-help relative z-10 hover:scale-110 transition-transform inline-block"
                        onMouseEnter={() => setActiveTheme('freelancer')}
                        onMouseLeave={() => setActiveTheme(null)}
                    >
                        Freelancer
                    </span> to survive. As it turns out, I'm actually quite good at it 😅"
                </p>
            </div>
        </section>
    );
}
