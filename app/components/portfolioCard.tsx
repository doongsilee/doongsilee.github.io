"use client";

import { useState } from "react";
import Image from "next/image";

const PortfolioCard = ({ portfolio }) => {
  const [index, setIndex] = useState(0);

  const {
    title,
    subtitle,
    images,
    medias,
    badges,
    description,
    period,
    type,
    role,
    contribution,
    links,
    stacks,
    organization,
  } = portfolio;

  return (
    <div className="flex flex-col gap-10 py-4">
      {/* Top: Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-100">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-colors whitespace-nowrap ${type === "Founder Project"
              ? "bg-indigo-50 text-indigo-600 border-indigo-100"
              : "bg-emerald-50 text-emerald-600 border-emerald-100"
              }`}>
              {type === "Founder Project" ? "🚀 Venture" : "🤝 Client Work"}
            </span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">{subtitle}</span>
          </div>
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-neutral-900 tracking-tighter leading-[0.9]">{title}</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="bg-neutral-50 px-3 py-1 rounded-lg text-[10px] font-bold text-neutral-500 uppercase tracking-wider border border-neutral-100"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Middle: Large Visuals */}
      <div className="flex flex-col gap-6">
        <div className="relative overflow-hidden aspect-video group shadow-xl rounded-[2.5rem] bg-neutral-100">
          {medias &&
            medias.map((media, i) => {
              if (media.type === "image") {
                return (
                  <Image
                    key={i}
                    src={media.url}
                    alt={title}
                    width={1920}
                    height={1080}
                    className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${index === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                  />
                );
              } else {
                return (
                  <video
                    key={i}
                    src={media.url}
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${index === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                  />
                );
              }
            })}
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex flex-row justify-center gap-3 px-4">
          {medias &&
            medias.map((media, i) => {
              return (
                <div
                  key={i}
                  className={`relative w-20 md:w-28 aspect-video rounded-xl cursor-pointer overflow-hidden transition-all duration-300 ${index === i ? "ring-2 ring-neutral-900 ring-offset-2 scale-95 shadow-lg" : "opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
                    }`}
                  onClick={() => setIndex(i)}
                >
                  <Image
                    src={media.type === "image" ? media.url : media.thumbnail}
                    alt={`${title} thumb`}
                    fill
                    className="object-cover"
                  />
                  {media.type === "video" && (
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="w-4 h-4 text-white opacity-90 drop-shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {/* Bottom: Detailed Info & Meta */}
      <div className="flex flex-col lg:flex-row gap-12 pt-4">
        <div className="flex-[1.5] flex flex-col gap-6">
          <p className="text-neutral-600 text-xl md:text-2xl leading-relaxed font-light">
            {description}
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <p className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">Tech Infrastructure</p>
            <div className="flex flex-col gap-5">
              {stacks.map((category) => (
                <div key={category.id} className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="min-w-[140px] text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{category.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {category.stack.map((item, idx) => (
                      <span key={idx} className="bg-neutral-50 border border-neutral-100 px-3 py-1 rounded-md text-[11px] font-medium text-neutral-600 transition-colors hover:bg-white hover:border-neutral-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metadata Sidebar */}
        <div className="flex-1 flex flex-col gap-8 p-8 bg-neutral-50/50 rounded-[2rem] border border-neutral-100/50">
          {organization && (
            <div>
              <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2 opacity-50">Organization</p>
              <p className="text-md font-bold text-neutral-800">{organization}</p>
            </div>
          )}
          <div>
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2 opacity-50">Period</p>
            <p className="text-md font-bold text-neutral-800">{period}</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2 opacity-50">Execution</p>
            <p className="text-md font-bold text-neutral-800">{contribution} Contribution</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2 opacity-50">Primary Role</p>
            <p className="text-md font-bold text-neutral-800 leading-snug">{role}</p>
          </div>
          {links.length > 0 && (
            <div>
              <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2 opacity-50">Live Links</p>
              <div className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <a key={i} href={link.link} target="_blank" className="inline-flex items-center text-sm font-bold text-indigo-500 hover:text-indigo-600 group transition-colors">
                    {link.title}
                    <svg className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
