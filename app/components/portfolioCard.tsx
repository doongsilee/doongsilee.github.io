"use client";

import { useState } from "react";
import Image from "next/image";

const PortfolioCard = ({ portfolio }) => {
  const [index, setIndex] = useState(0);

  const {
    title,
    subtitle,
    images,
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
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="Macdal"
              width={1092}
              height={614}
              className={`absolute top-0 left-0 w-full h-full rounded-lg object-contain transition-opacity duration-500 ease-in-out ${
                index === i ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
          {/* <Image
            src={images[index]}
            alt="Macdal"
            width={1092}
            height={614}
            className="rounded-lg transition-opacity duration-500 ease-in-out"
          /> */}
        </div>
        <div className="flex flex-row gap-4 aspect-[16/3]">
          <div
            className={`relative flex-1  rounded-lg cursor-pointer p-0 box-border ${
              index === 0 ? "outline-green-600 outline-4" : ""
            }`}
            onClick={() => setIndex(0)}
          >
            <Image
              src={images[0]}
              alt="Macdal"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div
            className={`relative flex-1  rounded-lg cursor-pointer box-border ${
              index === 1 ? " outline-green-600 outline-4" : ""
            }`}
            onClick={() => setIndex(1)}
          >
            <Image
              src={images[1]}
              alt="Macdal"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div
            className={`relative flex-1  rounded-lg cursor-pointer box-border ${
              index === 2 ? "outline-green-600 outline-4" : ""
            }`}
            onClick={() => setIndex(2)}
          >
            <Image
              src={images[2]}
              alt="Macdal"
              fill
              className="rounded-lg object-cover"
            />
          </div>
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
                    <a href={link.link} className="underline">
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
                <div className="flex flex-row gap-2 mt-2">
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
