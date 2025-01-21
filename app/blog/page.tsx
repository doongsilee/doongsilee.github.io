import { BlogPosts } from "app/components/posts";
import { getBlogPosts } from "./utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  let allBlogs = getBlogPosts();

  return (
    <section className="px-2 py-12 md:py-24">
      <BlogPosts allBlogs={allBlogs} />
    </section>
  );
}
