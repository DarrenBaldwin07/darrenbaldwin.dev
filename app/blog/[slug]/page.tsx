import { notFound } from 'next/navigation';
import { posts } from '@/lib/posts';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  return {
    title: post?.title ?? 'Post',
  };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className='text-gray-400'>
      <h1 className='text-white font-medium text-lg mb-4'>{post!.title}</h1>
      <p className='text-sm mb-8'>{post!.date}</p>
      <div className='space-y-4'>
        {post!.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
