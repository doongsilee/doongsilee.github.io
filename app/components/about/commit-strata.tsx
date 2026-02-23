'use client';

import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchGitHubCommits, getCommitIntensity, type CommitData } from 'app/lib/github-api';

gsap.registerPlugin(ScrollTrigger);

interface CommitStrataProps {
    username?: string;
}

export default function CommitStrata({ username = 'doongsilee' }: CommitStrataProps) {
    const [commitData, setCommitData] = useState<CommitData | null>(null);
    const containerRef = useRef(null);

    useEffect(() => {
        fetchGitHubCommits(username).then(setCommitData);
    }, [username]);

    useGSAP(() => {
        if (!commitData) return;

        gsap.fromTo('.commit-year',
            {
                opacity: 0,
                x: -50,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.2,
            }
        );
    }, { scope: containerRef, dependencies: [commitData] });

    if (!commitData) {
        return (
            <div className="flex justify-center items-center bg-neutral-50 rounded-xl w-full h-32 animate-pulse">
                <span className="text-neutral-400 text-sm">Loading commit history...</span>
            </div>
        );
    }

    const maxCommits = Math.max(
        ...commitData.years.flatMap(y => y.weeks)
    );

    return (
        <div ref={containerRef} className="space-y-3 w-full">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider">
                    GitHub Commit History for last 10 years
                </h4>
                <span className="text-neutral-500 text-xs">
                    {commitData.totalCommits.toLocaleString()} commits since 2017
                </span>
            </div>

            <div className="relative space-y-1">
                {commitData.years.map((yearData) => (
                    <div key={yearData.year} className="group flex items-center gap-2 commit-year">
                        {/* Year Label */}
                        <span className="w-12 font-mono text-neutral-500 text-xs text-right">
                            {yearData.year}
                        </span>

                        {/* Commit Visualization */}
                        <div className="flex flex-1 bg-neutral-100 rounded-sm h-2 overflow-hidden">
                            {yearData.weeks.map((commits, weekIndex) => {
                                const intensity = getCommitIntensity(commits, maxCommits);
                                return (
                                    <div
                                        key={weekIndex}
                                        className="transition-all duration-200"
                                        style={{
                                            backgroundColor: `rgba(59, 130, 246, ${intensity})`,
                                            width: `${100 / yearData.weeks.length}%`,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4 text-neutral-500 text-xs">
                <span>Less</span>
                <div className="flex gap-1">
                    {[0.2, 0.4, 0.6, 0.8, 1].map((intensity) => (
                        <div
                            key={intensity}
                            className="rounded-sm w-3 h-3"
                            style={{ backgroundColor: `rgba(59, 130, 246, ${intensity})` }}
                        />
                    ))}
                </div>
                <span>More</span>
            </div>
        </div>
    );
}
