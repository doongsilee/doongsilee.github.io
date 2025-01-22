"use client";

import { formatDate } from "app/utils/formater";
import Link from "next/link";

import { use, useEffect, useState } from "react";

export function BlogPosts({ allBlogs }) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [allCategories, setAllCategories] = useState(["All"]);
  const [fillteredBlogs, setFilteredBlogs] = useState(allBlogs);

  useEffect(() => {
    const allCategories = [
      "All",
      ...Array.from(
        new Set<string>(allBlogs.map((post) => post.metadata.category))
      ),
    ];

    setAllCategories(allCategories);
  }, [allBlogs]);

  useEffect(() => {
    const filteredBlogs = allBlogs.filter((post) => {
      if (selectedCategoryIndex === 0) return true;
      return post.metadata.category === allCategories[selectedCategoryIndex];
    });

    setFilteredBlogs(filteredBlogs);
  }, [allCategories, selectedCategoryIndex]);

  return (
    <div className="">
      <div className="flex flex-row flex-wrap gap-2 mb-8">
        {allCategories.map((category, index) => (
          <span
            key={index}
            className={`border-2 px-2 md:px-4 py-1 border-black rounded-xl md:rounded-2xl text-black text-sm md:text-xl ${
              selectedCategoryIndex === index
                ? "bg-black text-white"
                : "bg-white"
            }`}
            onClick={() => setSelectedCategoryIndex(index)}
          >
            {category}
          </span>
        ))}
      </div>

      {fillteredBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col gap-2 space-x-0 w-full">
              <p className="font-semibold text-neutral-900 md:text-xl tracking-tight">
                {post.metadata.title}
              </p>
              {/* {post.metadata.tags && (
                post.metadata.tags.map((tag) => (
                  <li
                key={index}
                className="bg-black px-4 py-1 rounded-2xl font-semibold text-white"
              >
                {badge}
              </li>
                ))} */}
              <p className="text-neutral-600 text-sm md:text-base dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
