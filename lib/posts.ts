export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    description: 'A short sample blog post to get things started.',
    date: '2024-05-01',
    content: [
      'Welcome to your new blog!',
      'This is a simple example post to demonstrate how blog pages work.',
    ],
  },
];
