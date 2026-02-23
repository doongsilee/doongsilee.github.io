'use client';

import { motion } from "framer-motion";

const skills = [
    {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "HTML/CSS", "Swift", "Kotlin"],
        colors: "from-blue-500 to-cyan-500"
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js"],
        colors: "from-purple-500 to-pink-500"
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB"],
        colors: "from-green-500 to-emerald-500"
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
        colors: "from-orange-500 to-amber-500"
    }
];

export default function Skills() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Featured Card: Software Developer */}
            <motion.div
                className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-neutral-900 text-white relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 z-0"></div>

                {/* Animated background circles */}
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="text-5xl mb-4">💻</div>
                        <h3 className="text-3xl font-bold mb-2">Software Developer</h3>
                        <p className="text-neutral-400">Building digital products with code.</p>
                    </div>

                    <div className="mt-8">
                        <p className="font-semibold text-lg text-neutral-300 mb-3">Core Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/10">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Other Interests */}
            {[
                {
                    title: "Traveler",
                    emoji: "✈️",
                    bg: "bg-blue-50 hover:bg-blue-100",
                    desc: "Exploring the world",
                    colSpan: "md:col-span-1",
                    rowSpan: "md:row-span-1"
                },
                {
                    title: "Gamer",
                    emoji: "🎮",
                    bg: "bg-purple-50 hover:bg-purple-100",
                    desc: "RPG & Adventure",
                    colSpan: "md:col-span-1",
                    rowSpan: "md:row-span-1"
                },
                {
                    title: "Apple Fan",
                    emoji: "🍎",
                    bg: "bg-neutral-100 hover:bg-neutral-200",
                    desc: "Ecosystem prisoner",
                    colSpan: "md:col-span-1",
                    rowSpan: "md:row-span-1"
                },
                {
                    title: "Cooking",
                    emoji: "🍜",
                    bg: "bg-orange-50 hover:bg-orange-100",
                    desc: "Asian & Western",
                    colSpan: "md:col-span-1",
                    rowSpan: "md:row-span-1"
                },
            ].map((item, index) => (
                <motion.div
                    key={item.title}
                    className={`${item.colSpan} ${item.rowSpan} ${item.bg} rounded-3xl p-6 relative overflow-hidden transition-all duration-300 group`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                    <div className="h-full flex flex-col justify-between relative z-10">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300 origin-left">{item.emoji}</div>
                        <div>
                            <h3 className="font-bold text-neutral-800">{item.title}</h3>
                            <p className="text-sm text-neutral-600">{item.desc}</p>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Wide card for detailed skills marquee or list */}
            <motion.div
                className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h3 className="font-bold text-neutral-800 mb-4 z-10 relative">Technical Arsenal</h3>
                <div className="flex gap-4 overflow-hidden mask-linear relative z-10">
                    <div className="flex gap-4 animate-marquee whitespace-nowrap">
                        {[...skills, ...skills].map((group, i) => ( // Duplicated for scrolling effect
                            group.items.map((skill) => (
                                <span key={`${i}-${skill}`} className="px-4 py-2 bg-white rounded-xl shadow-sm border border-neutral-100 text-sm font-medium text-neutral-600">
                                    {skill}
                                </span>
                            ))
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
