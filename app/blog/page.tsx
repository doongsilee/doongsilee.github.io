import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className='px-2 py-12 md:py-24'>
      <h1 className="mb-8 font-semibold text-xl md:text-2xl tracking-tighter">All</h1>
      <BlogPosts />
    </section>
  )
}
