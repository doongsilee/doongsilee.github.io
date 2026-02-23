'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { MontserratFont } from "app/ui/fonts";

gsap.registerPlugin(ScrollTrigger);

const startups = [
    {
        name: "softlunch",
        products: ["Financial Big Data", "Location-based UX", "Fintech MVP"],
        description: "Fintech venture providing personalized recommendation services through financial data and location-based analytics. ",
        color: "#0088F7",
        logo: "/images/softlunch-logo.jpg"
    },
    {
        name: "NOLLAB",
        products: ["StreetBaller", "Leisure Platform", "Matchmaking AI"],
        description: "Developed a platform for leisure and sports revitalization. Featured 'StreetBaller', a location-based matching and community management service for basketball enthusiasts in Korea.",
        color: "#FF8826",
        logo: "/images/nollab-logo.png"
    },
    {
        name: "josangnim.com",
        products: ["Grave Maintenance", "Funeral Tech", "Ancestral Care"],
        description: "A specialized platform for grave weeding and maintenance services, targeting the broader market for grave relocation and traditional funeral culture through digital transformation.",
        color: "#009E58",
        logo: "/images/josangnim-logo.png"
    },
    {
        name: "Tryfifty",
        products: ["LLM Documentation", "PM SaaS", "Dev Collaboration"],
        description: "Developed an LLM-powered documentation automation tool designed to bridge the gap between software development teams and PMs through seamless communication and automated workflows.",
        color: "#000000",
        logo: "/images/tryfifty_logo.jpeg"
    }
];

export default function StartupSection() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        tl.fromTo(".startup-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
            .fromTo(".startup-content",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(".startup-entity",
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
                "-=0.4"
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="px-4 md:px-0 py-10 border-neutral-200 border-t w-full">
            <div className="mx-auto max-w-4xl">
                {/* Title Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className={`startup-title ${MontserratFont.className} text-3xl font-bold text-neutral-900`}>
                            Startup Founder
                        </h2>
                        <span className="inline-block bg-purple-100 px-3 py-1 rounded-full font-bold text-purple-700 text-sm">
                            Startup Hustler
                        </span>
                    </div>

                    <h3 className="mb-6 font-medium text-neutral-800 text-xl leading-relaxed startup-content">
                        "10+ Products, 4 Corporations, and many more Hypotheses Tested."
                    </h3>

                    <div className="space-y-4 text-neutral-600 leading-relaxed startup-content">
                        <p>
                            My startup journey isn't a gallery of "Exits" or "Unicorns." It’s a collection of raw survival stories and hard-won lessons. I've spent years in the trenches, testing dozens of hypotheses and launching numerous MVPs just to see what sticks.
                        </p>
                        <p>
                            Among those many trials, four ventures—<strong>softlunch</strong>, <strong>NOLLAB</strong>, <strong>josangnim.com</strong>, and <strong>Tryfifty</strong>—reached the point of incorporation. Some didn't find their market and closed down, and some are still running but have changed shape entirely. Each one taught me how to build fast, fail lean, and stay resilient in the face of uncertainty. I don't just build software; I build based on the reality I've faced.
                        </p>
                    </div>
                </div>

                {/* The Hustle Stat */}
                <div className="flex flex-wrap justify-between items-center gap-6 bg-purple-50 mb-16 px-6 py-6 border border-purple-100 rounded-xl startup-content">
                    <div className="min-w-[100px] text-center">
                        <div className="font-bold text-purple-600 text-4xl">7+</div>
                        <div className="mt-1 text-purple-700 text-xs uppercase tracking-wider">Teams Built</div>
                    </div>
                    <div className="min-w-[100px] text-center">
                        <div className="font-bold text-purple-600 text-4xl">4</div>
                        <div className="mt-1 text-purple-700 text-xs uppercase tracking-wider">Legal Entities</div>
                    </div>
                    <div className="min-w-[100px] text-center">
                        <div className="font-bold text-purple-600 text-4xl">20+</div>
                        <div className="mt-1 text-purple-700 text-xs uppercase tracking-wider">Hypotheses Tested</div>
                    </div>
                    <div className="min-w-[100px] text-center">
                        <div className="font-bold text-purple-600 text-4xl">10+</div>
                        <div className="mt-1 text-purple-700 text-xs uppercase tracking-wider">Products Built</div>
                    </div>
                    <div className="min-w-[100px] text-center">
                        <div className="font-bold text-purple-600 text-4xl">6</div>
                        <div className="mt-1 text-purple-700 text-xs uppercase tracking-wider">Launched</div>
                    </div>
                </div>

                {/* Entity Timeline */}
                <div className="space-y-12">
                    <h4 className="pb-2 border-neutral-100 border-b font-bold text-neutral-900 text-sm uppercase tracking-wider startup-content">Founded Companies</h4>
                    <div className="gap-12 grid grid-cols-1 md:grid-cols-2">
                        {startups.map((startup) => (
                            <div key={startup.name}
                                className="group startup-entity"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    {/* Logo Container */}
                                    <div className="flex flex-shrink-0 justify-center items-center bg-white group-hover:shadow-md border-neutral-100 rounded-xl w-16 h-16 overflow-hidden transition-shadow">
                                        {startup.logo ? (
                                            <img src={startup.logo} alt={startup.name} className="w-full h-full object-contain" />
                                        ) : (
                                            <span className="font-bold text-[10px] text-neutral-400 uppercase">Logo</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className={`text-xl font-bold text-neutral-900 ${MontserratFont.className}`}>
                                            {startup.name}
                                        </h5>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {startup.products.map(product => (
                                                <span key={product} className="bg-neutral-50 px-2 py-0.5 border border-neutral-100 rounded text-[10px] text-neutral-500">
                                                    {product}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-neutral-500 text-sm italic leading-relaxed">{startup.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-end">
                    <a
                        href="/portfolio"
                        className="group flex items-center justify-center gap-2 px-8 py-3 w-full md:w-60 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-all hover:scale-105 active:scale-95"
                    >
                        View Portfolio
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
