'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { MontserratFont } from "app/ui/fonts";
import CommitStrata from "./commit-strata";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperSection() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom center",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(".dev-title", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
        })
            .from(".dev-content", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
            }, "-=0.4");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="px-4 md:px-0 py-10 border-neutral-200 border-t w-full">
            <div className="mx-auto max-w-4xl">
                {/* Title Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className={`dev-title ${MontserratFont.className} text-3xl font-bold text-neutral-900`}>
                            Fullstack Software Developer
                        </h2>
                        <span className="inline-block bg-blue-100 px-3 py-1 rounded-full font-bold text-blue-700 text-sm">
                            10+ years
                        </span>
                    </div>

                    <h3 className="mb-6 font-medium text-neutral-800 text-xl leading-relaxed dev-content">
                        "A full-stack veteran with a curiously wide spectrum."
                    </h3>

                    {/* GitHub Commit Visualization */}
                    <div className="mt-6 mb-8">
                        <CommitStrata username="doongsilee" />
                    </div>

                    <div className="space-y-4 text-neutral-600 leading-relaxed dev-content">
                        <p>
                            I started my career as a mobile app developer in 2009, back when I was still in college and the smartphone revolution was just beginning. The booming mobile app market in Korea at that time provided plenty of career opportunities, even for a junior engineer like me.
                        </p>
                        <p>
                            My path then led me to Samsung Electronics, where I spent years working on global-scale backend systems and cloud infrastructure. It was here that I dove deep into distributed systems, microservices architecture, and the complexities of serving millions of users across different regions.
                        </p>
                        <p>
                            When I moved to the startup world, the role completely changed. There was no luxury of specializing in just one area - if something needed to be built, I built it. Frontend, mobile, DevOps, AI integration - whatever the product needed. This became how I naturally work.
                        </p>
                        <p>
                            Now my experience spans from embedded software for IoT sensors to cutting-edge LLM Application implementations. Whether it's a straightforward matching service or a complex real-time analytics platform, I focus on understanding the problem and building what works.
                        </p>

                        {/* <div className="bg-neutral-50 mt-6 p-4 border border-neutral-100 rounded-xl">
                            <h4 className="mb-2 font-bold text-blue-600 text-neutral-900 text-sm uppercase tracking-wider">Core Expertise</h4>
                            <div className="flex flex-wrap gap-2 text-sm">
                                {["Web & Mobile", "Backend Systems", "Embedded IoT", "AI Engineering"].map((item) => (
                                    <span key={item} className="bg-white px-2 py-1 border border-neutral-200 rounded text-neutral-600">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="mt-12 flex justify-end">
                    <a
                        href="/portfolio"
                        className="group flex items-center justify-center gap-2 px-8 py-3 w-full md:w-64 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
                    >
                        View My Tech Stack
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
