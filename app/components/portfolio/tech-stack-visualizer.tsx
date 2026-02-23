'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MontserratFont } from 'app/ui/fonts';

interface TechItem {
    name: string;
    x: number; // Usage (0-100)
    y: number; // Experience (0-100)
    category: 'Frontend' | 'Backend' | 'Language' | 'AI' | 'DevOps' | 'Tool' | 'Infrastructure';
}

const techData: TechItem[] = [
    // Core Stack (Top Right: High Usage, High Confidence)
    { name: 'TypeScript', x: 95, y: 83, category: 'Language' },
    { name: 'JavaScript', x: 99, y: 95, category: 'Language' },
    { name: 'React', x: 99, y: 90, category: 'Frontend' },
    { name: 'Node.js', x: 99, y: 86, category: 'Backend' },
    { name: 'Git', x: 98, y: 98, category: 'Tool' },
    // { name: 'VSCode', x: 10, y: 96, category: 'Tool' },
    // { name: 'Cursor', x: 96, y: 92, category: 'Tool' },
    // { name: 'Antigravity', x: 92, y: 88, category: 'Tool' },
    // { name: 'Linux', x: 85, y: 90, category: 'Infrastructure' },
    // { name: 'zsh', x: 92, y: 85, category: 'Tool' },
    { name: 'AWS', x: 95, y: 90, category: 'Infrastructure' },
    { name: 'Google Cloud', x: 8, y: 78, category: 'Infrastructure' },
    { name: 'Websocket', x: 62, y: 68, category: 'Backend' },
    { name: 'REST API', x: 94, y: 88, category: 'Backend' },

    // AI & Modern Tech (Middle or Top Right depending on usage)
    { name: 'LLM API', x: 96, y: 79, category: 'AI' },
    { name: 'RAG Systems', x: 55, y: 38, category: 'AI' },
    { name: 'LangChain', x: 40, y: 50, category: 'AI' },
    { name: 'Langfuse', x: 88, y: 23, category: 'AI' },
    { name: 'LangGraph', x: 85, y: 15, category: 'AI' },
    { name: 'MediaPipe', x: 5, y: 30, category: 'AI' },
    { name: 'Whisper', x: 65, y: 45, category: 'AI' },
    { name: 'Neo4j', x: 12, y: 12, category: 'AI' },

    // Backend & Infrastructure
    { name: 'Express', x: 82, y: 60, category: 'Backend' },
    { name: 'Nest.js', x: 45, y: 50, category: 'Backend' },
    { name: 'TypeORM', x: 20, y: 40, category: 'Backend' },
    { name: 'MySQL', x: 80, y: 80, category: 'Backend' },
    { name: 'PostgreSQL', x: 70, y: 52, category: 'Backend' },
    { name: 'Redis', x: 99, y: 59, category: 'Backend' },
    { name: 'Supabase', x: 33, y: 45, category: 'Backend' },
    { name: 'Firebase', x: 12, y: 85, category: 'Backend' },
    { name: 'Docker', x: 75, y: 70, category: 'Infrastructure' },
    { name: 'Vercel', x: 12, y: 70, category: 'Infrastructure' },
    { name: 'Kubernetes', x: 90, y: 15, category: 'Infrastructure' },
    { name: 'GitHub Actions', x: 90, y: 65, category: 'DevOps' },
    { name: 'Jenkins', x: 15, y: 20, category: 'DevOps' },
    { name: 'Ansible', x: 12, y: 5, category: 'DevOps' },
    { name: 'Grafana', x: 50, y: 15, category: 'DevOps' },
    { name: 'Prometheus', x: 45, y: 10, category: 'DevOps' },

    // Frontend & Mobile
    { name: 'HTML / CSS', x: 96, y: 93, category: 'Frontend' },
    { name: 'React Native', x: 65, y: 88, category: 'Frontend' },
    { name: 'Expo', x: 62, y: 85, category: 'Frontend' },

    // Legacy / Deep Theory (Top Left: Low Usage, High Confidence)
    { name: 'Next.js', x: 30, y: 52, category: 'Frontend' },
    { name: 'Redux', x: 25, y: 34, category: 'Frontend' },
    { name: 'Android Native', x: 18, y: 88, category: 'Frontend' },
    { name: 'iOS (Native)', x: 2, y: 66, category: 'Frontend' },
    { name: 'Objective-C', x: 5, y: 25, category: 'Language' },
    { name: 'Java', x: 48, y: 78, category: 'Language' },
    { name: 'Spring Boot', x: 40, y: 74, category: 'Backend' },
    { name: 'Kafka', x: 96, y: 12, category: 'Backend' },
    { name: 'Sequelize', x: 22, y: 82, category: 'Backend' },
    { name: 'C++', x: 8, y: 45, category: 'Language' },
    // { name: 'vi', x: 60, y: 85, category: 'Tool' },
    // { name: 'PyCharm', x: 35, y: 75, category: 'Tool' },
    // { name: 'Xcode', x: 40, y: 85, category: 'Tool' },
    // { name: 'Android Studio', x: 45, y: 88, category: 'Tool' },

    // Tools & API
    // { name: 'Jira', x: 75, y: 80, category: 'Tool' },
    // { name: 'Postman', x: 12, y: 52, category: 'Tool' },
    // { name: 'Swagger', x: 85, y: 88, category: 'Tool' },
    { name: 'Figma Plugin', x: 45, y: 43, category: 'Tool' },
    { name: 'Slack Plugin(bolt)', x: 12, y: 40, category: 'Tool' },
    { name: 'Notion Plugin', x: 15, y: 20, category: 'Tool' },

    // Entry Level / Exploring
    { name: 'Python', x: 75, y: 52, category: 'Language' },
    { name: 'Prisma', x: 88, y: 50, category: 'Backend' },
    { name: 'Vision Deep Learning Models(YOLO, etc)', x: 35, y: 22, category: 'AI' },
    { name: 'R', x: 5, y: 12, category: 'Language' },
    { name: 'Dart', x: 12, y: 8, category: 'Language' },
    { name: 'Kotlin', x: 10, y: 18, category: 'Language' },
    { name: 'Chroma DB', x: 8, y: 15, category: 'AI' },
];

const categoryColors = {
    Frontend: 'bg-blue-400',
    Backend: 'bg-emerald-400',
    Language: 'bg-amber-400',
    AI: 'bg-purple-400',
    DevOps: 'bg-rose-400',
    Infrastructure: 'bg-orange-400',
    Tool: 'bg-slate-400',
};

const TechStackVisualizer = () => {
    const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);
    const [activeCategories, setActiveCategories] = useState<string[]>(['Frontend', 'Backend', 'AI']);

    const toggleCategory = (category: string) => {
        setActiveCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-12">
            <div className="mb-10 text-center md:text-left">
                <h2 className={`${MontserratFont.className} text-3xl font-bold text-neutral-900 mb-2`}>
                    Tech Stack
                </h2>
                <p className="text-neutral-500">
                    A 2D mapping of my Confidence Level vs. Recency & Frequency.
                </p>
            </div>

            <div className="relative aspect-square md:aspect-[4/3] w-full bg-gray-50/100 rounded-2xl backdrop-blur-sm overflow-hidden ">
                {/* Background Grid & Quadrants */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    <div className="border-r border-b border-dashed border-neutral-200 bg-neutral-50/20 flex items-start justify-start p-6">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold opacity-50">Deep Theory / Legacy</span>
                    </div>
                    <div className="border-b border-dashed border-neutral-200 bg-blue-50/20 flex items-start justify-end p-6">
                        <span className="text-[10px] uppercase tracking-widest text-blue-500 font-black">Core Expertise</span>
                    </div>
                    <div className="border-r border-dashed border-neutral-200 bg-neutral-50/10 flex items-end justify-start p-6">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold opacity-40">Entry Level / Exploring</span>
                    </div>
                    <div className="bg-emerald-50/10 flex items-end justify-end p-6">
                        <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold opacity-60">Active Learning</span>
                    </div>
                </div>

                {/* Axes Labels */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">Confidence Level (Knowledge)</span>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">Recency & Frequency</span>
                </div>

                {/* Y-Axis Markers */}
                <div className="absolute left-12 top-0 bottom-0 flex flex-col justify-between py-16 text-[8px] font-black text-neutral-300 uppercase tracking-tighter">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-neutral-200" />
                        <span>Expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-neutral-200" />
                        <span>Proficient</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-neutral-200" />
                        <span>Explored</span>
                    </div>
                </div>

                {/* X-Axis Markers */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-between px-20 text-[8px] font-black text-neutral-300 uppercase tracking-tighter">
                    <div className="flex flex-col items-center gap-1">
                        <span>Not Using</span>
                        <div className="w-[1px] h-4 bg-neutral-200" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span>Sometimes</span>
                        <div className="w-[1px] h-4 bg-neutral-200" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span>Often</span>
                        <div className="w-[1px] h-4 bg-neutral-200" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span>Core Stack</span>
                        <div className="w-[1px] h-4 bg-neutral-200" />
                    </div>
                </div>

                {/* Scatter Plot Points */}
                <div className="absolute inset-20">
                    {techData.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            className={`absolute w-3 h-3 md:w-4 md:h-4 rounded-full ${categoryColors[tech.category]} cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.1)] ring-2 ring-white hover:ring-offset-2 hover:scale-150 transition-all z-10 group`}
                            style={{
                                left: `${tech.x}%`,
                                bottom: `${tech.y}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
                            onMouseEnter={() => setHoveredTech(tech)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            {/* Inner Glow */}
                            <div className={`absolute inset-0 rounded-full animate-pulse opacity-50 blur-md ${categoryColors[tech.category]}`} />

                            {/* Simple label for selected categories or core techs */}
                            {(activeCategories.includes(tech.category) || (tech.x > 85 && tech.y > 75)) && (
                                <span className="hidden md:block absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] font-black text-neutral-400 uppercase tracking-tighter bg-white/50 backdrop-blur-sm px-1 rounded transition-opacity group-hover:opacity-0 pointer-events-none">
                                    {tech.name}
                                </span>
                            )}
                        </motion.div>
                    ))}

                    {/* Tooltip */}
                    <AnimatePresence>
                        {hoveredTech && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute z-50 pointer-events-none bg-white p-3 rounded-xl shadow-2xl border border-neutral-200"
                                style={{
                                    left: `${hoveredTech.x}%`,
                                    bottom: `${hoveredTech.y + 10}%`,
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className={`w-2 h-2 rounded-full ${categoryColors[hoveredTech.category]}`} />
                                    <span className="font-bold text-neutral-900 text-sm whitespace-nowrap">{hoveredTech.name}</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-tighter">Recency & Frequency</span>
                                        <div className="w-16 h-1 bg-neutral-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-400" style={{ width: `${hoveredTech.x}%` }} />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-tighter">Skill</span>
                                        <div className="w-16 h-1 bg-neutral-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-400" style={{ width: `${hoveredTech.y}%` }} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Legend / Toggles */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                {Object.entries(categoryColors).map(([cat, color]) => {
                    const isActive = activeCategories.includes(cat);
                    return (
                        <button
                            key={cat}
                            onClick={() => toggleCategory(cat)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${isActive
                                ? 'bg-white border-neutral-900 shadow-md scale-105 z-10'
                                : 'bg-white border-neutral-200 hover:border-neutral-400 opacity-80'
                                }`}
                        >
                            <div className={`w-2.5 h-2.5 rounded-full ${color} ${isActive ? 'ring-2 ring-offset-1 ring-neutral-200' : ''}`} />
                            <span className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-neutral-900' : 'text-neutral-500'}`}>
                                {cat}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Quadrant Descriptions */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t border-neutral-100 pt-10">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest">Core Expertise</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                        My primary comfort zone. These are the tools I use day-to-day and feel most natural with, representing my current mainstay technologies.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        <span className="text-[11px] font-black text-neutral-500 uppercase tracking-widest">Deep Theory / Legacy</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                        Technologies I worked with extensively in the past. While I don&apos;t use them as often now, they provided a strong foundation for how I think about systems today.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">Active Learning</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                        New tools and concepts I&apos;m currently exploring or experimenting with. I&apos;m learning by doing and finding where they fit into my daily workflow.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                        <span className="text-[11px] font-black text-neutral-400 uppercase tracking-widest">Entry Level / Exploring</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                        Things I&apos;ve briefly explored in the past or am just starting to look into. They aren&apos;t part of my current workflow, but I know my way around the basics.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechStackVisualizer;
