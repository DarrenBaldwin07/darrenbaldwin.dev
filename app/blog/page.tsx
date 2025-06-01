import Link from 'next/link';
import { posts } from '@/lib/posts';

export const metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  return (
    <div className='text-gray-400'>
      <h1 className='text-white font-medium text-lg mb-8'>Blog</h1>
      <ul className='flex flex-col gap-6'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className='text-white underline'>
              {post.title}
            </Link>
            <p className='text-sm'>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
