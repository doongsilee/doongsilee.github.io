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
  } = portfolio;

  return (
    <div className="flex flex-col gap-6 px-2">
      <div className="flex flex-col gap-12 min-w-xs">
        <div className="flex flex-col gap-2">
          <p className="text-gray-800 text-md">{subtitle}</p>
          <h2 className="font-bold text-4xl leading-8">{title}</h2>
          <ul className="flex flex-row flex-wrap gap-2 mt-4 text-sm">
            {badges.map((badge, index) => (
              <li
                key={index}
                className="bg-black px-4 py-1 rounded-2xl font-semibold text-white"
              >
                {badge}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-md whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-8">
        <div className="relative overflow-hidden aspect-video">
          {medias &&
            medias.map((media, i) => {
              if (media.type === "image") {
                return (
                  <Image
                    key={i}
                    src={media.url}
                    alt="Macdal"
                    width={1092}
                    height={614}
                    className={`absolute top-0 left-0 w-full h-full rounded-lg object-contain transition-opacity duration-500 ease-in-out ${
                      index === i ? "opacity-100 z-10" : "opacity-0 z-0"
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
                    className={`absolute top-0 left-0 w-full h-full rounded-lg object-cover transition-opacity duration-500 ease-in-out ${
                      index === i ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                  // <iframe src={media.url} className="w-full h-full" />
                );
              }
            })}
        </div>
        <div className="flex flex-row gap-4 aspect-[16/3]">
          {medias &&
            medias.map((media, i) => {
              return (
                <div
                  className={`relative flex-1 max-w-[33%] rounded-lg cursor-pointer p-0 box-border ${
                    index === i ? "outline-red-400 outline-4" : ""
                  }`}
                  onClick={() => setIndex(i)}
                >
                  <Image
                    src={media.type === "image" ? media.url : media.thumbnail}
                    alt="Macdal"
                    fill
                    className="rounded-lg object-cover"
                  />
                  {media.type === "video" && (
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="w-4 md:w-9 h-4 md:h-9">
                        <svg
                          // width="48"
                          // height="48"
                          viewBox="0 0 150 177"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_3079_4193)">
                            <path
                              d="M140 90.8923C148 86.2735 148 74.7265 140 70.1077L22.25 2.1247C14.25 -2.4941 4.25 3.2794 4.25 12.517V148.483C4.25 157.721 14.25 163.494 22.25 158.875L140 90.8923Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_3079_4193"
                              x="0.25"
                              y="0.499023"
                              width="149.75"
                              height="176.002"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="12" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_3079_4193"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_3079_4193"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-bold">Period</p>
          <p className="text-gray-600">{period}</p>
        </div>
        <div>
          <p className="font-bold">Project Type</p>
          <p className="text-gray-600">{type}</p>
        </div>
        <div>
          <p className="font-bold">Role</p>
          <p className="text-gray-600">{role}</p>
        </div>
        <div>
          <p className="font-bold">Contribution</p>
          <p className="text-gray-600">{contribution}</p>
        </div>
        <div>
          <p className="font-bold">Link</p>
          <div className="flex flex-row gap-2 text-gray-600">
            {links.length > 0
              ? links.map((link) => {
                  return (
                    <a href={link.link} className="underline" target="_blank">
                      {link.title}
                    </a>
                  );
                })
              : "-"}
          </div>
        </div>
        <div>
          <p className="font-bold">Tech Stack</p>
          <div className="flex flex-col gap-1 text-gray-600">
            {stacks.map((category) => {
              return (
                <div className="flex flex-row items-center gap-2 mt-2">
                  <p className="font-semibold">{category.category}</p>
                  <div className="flex flex-row flex-wrap flex-1 gap-2 text-gray-800 overflow-hidden">
                    {category.stack.map((stack) => {
                      return (
                        <span className="bg-gray-200 px-3 py-1 rounded-2xl">
                          {stack}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
