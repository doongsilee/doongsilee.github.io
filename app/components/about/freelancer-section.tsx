'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { MontserratFont } from "app/ui/fonts";

gsap.registerPlugin(ScrollTrigger);

const freelancingProjects = [
    {
        name: "Tooning",
        description: "Freelance engagement on the AI webtoon creation platform. Participated in v1.0 development and stabilization, cloud migration, and building AI-based webtoon background generation features.",
        category: "AI/Content Platform",
        reContractCount: 3,
        logo: "/images/logo_tooning.svg"
    },
    {
        name: "Kowork",
        description: "Job platform for foreigners in Korea. Delivered the project end-to-end from initial v1.0 design and development through to Android and iOS release.",
        category: "Job Matching Platform",
        reContractCount: 2,
        logo: "/images/blue-main-logo.png"
    },
    {
        name: "MyLab",
        description: "Personalized health management healthcare app. Led v1.0 mobile app development and LLM-based report generation projects.",
        category: "Health Tech",
        reContractCount: 2,
        logo: "/images/www.hempharma.avif"
    },
    {
        name: "Spoeum",
        description: "Platform matching professional golfers and caddies. Led v1.0 design, front-end and back-end development, and served as PM for the dev team.",
        category: "Sports Matching",
        reContractCount: 3,
        logo: "/images/spoeum-logo.png"
    }
];

export default function FreelancerSection() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        tl.fromTo(".freelancer-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
            .fromTo(".freelancer-content",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(".freelancer-project",
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
                        <h2 className={`freelancer-title ${MontserratFont.className} text-3xl font-bold text-neutral-900`}>
                            Freelance Developer
                        </h2>
                        <span className="inline-block bg-green-100 px-3 py-1 rounded-full font-bold text-green-700 text-sm">
                            Trusted Partner
                        </span>
                    </div>

                    <h3 className="mb-6 font-medium text-neutral-800 text-xl leading-relaxed freelancer-content">
                        "Quality proven by client satisfaction and sustained partnerships"
                    </h3>

                    <div className="space-y-4 text-neutral-600 leading-relaxed freelancer-content">
                        <p>
                            As a freelance developer, I've built core services for various startups and companies. Below are some of my representative projects.
                        </p>
                        <p>
                            Clients have been <strong>highly satisfied</strong> with my work, and I've achieved a <strong>sustained re-contract rate of 80%</strong>. Below are a few representative projects I've delivered.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-between items-center gap-6 bg-green-50 mb-16 px-6 py-6 border border-green-100 rounded-xl freelancer-content">
                    <div className="min-w-[100px] text-center">
                        <div className="font-bold text-green-600 text-4xl">80%</div>
                        <div className="mt-1 text-green-700 text-xs uppercase tracking-wider">Re-contract Rate</div>
                    </div>
                    <div className="min-w-[100px] text-center">
                        <div className="flex justify-center items-center gap-1 font-bold text-green-600 text-4xl">
                            <span>★★★★★</span>
                        </div>
                        <div className="mt-1 text-green-700 text-xs uppercase tracking-wider">Client Satisfaction</div>
                    </div>
                    <div className="min-w-[100px] text-center">
                        <div className="font-bold text-green-600 text-4xl">100%</div>
                        <div className="mt-1 text-green-700 text-xs uppercase tracking-wider">On-time Delivery</div>
                    </div>
                </div>

                {/* Projects */}
                <div className="space-y-12">
                    <h4 className="pb-2 border-neutral-100 border-b font-bold text-neutral-900 text-sm uppercase tracking-wider freelancer-content">Featured Projects</h4>
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                        {freelancingProjects.map((project) => (
                            <div key={project.name}
                                className="group freelancer-project h-full"
                            >
                                <div className="bg-white hover:shadow-md p-6 border border-neutral-200 hover:border-green-300 rounded-xl transition-all h-full flex flex-col">
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <div className="flex items-start gap-3 min-w-0">
                                            {project.logo && (
                                                <div className="w-12 h-12 shrink-0 rounded-lg bg-white border border-neutral-100 flex items-center justify-center overflow-hidden">
                                                    <img src={project.logo} alt={project.name} className="w-full h-full object-contain" />
                                                </div>
                                            )}
                                            <div className="min-w-0">
                                                <h5 className={`text-xl font-bold text-neutral-900 ${MontserratFont.className} mb-1`}>
                                                    {project.name}
                                                </h5>
                                                <span className="bg-green-50 px-2 py-1 border border-green-200 rounded text-green-700 text-xs">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className="text-2xl font-bold text-green-600">{project.reContractCount}</span>
                                            <span className="text-xs text-neutral-500 block uppercase tracking-wider">Re-contracts</span>
                                        </div>
                                    </div>
                                    <p className="text-neutral-600 text-sm leading-relaxed flex-1">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-end">
                    <a
                        href="/portfolio"
                        className="group flex items-center justify-center gap-2 px-8 py-3 w-full md:w-60 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all hover:scale-105 active:scale-95"
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
