# darrenbaldwin.dev

Personal website and blog for Darren Baldwin built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: Custom components with Tailwind
- **Rendering**: Server and Client Components
- **Content**: MDX for blog posts
- **Deployment**: Vercel (assumed)

## Features

- Personal portfolio showcasing current work and projects
- Blog functionality with MDX support
- Responsive design for all device sizes
- Modern UI with hover states and smooth transitions
- SEO optimized

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── blog/             # Blog posts and blog-related pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components
├── lib/                  # Utility functions and shared code
├── public/               # Static assets
└── ...configuration files
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (preferred package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DarrenBaldwin07/darrenbaldwin.dev.git
   cd darrenbaldwin.dev
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

### Turbopack

This project uses Next.js with Turbopack for faster refresh times during development:

```bash
pnpm dev
```

### Building for Production

```bash
pnpm build
pnpm start
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## Contact

- Website: [darrenbaldwin.dev](https://darrenbaldwin.dev)
- GitHub: [@DarrenBaldwin07](https://github.com/DarrenBaldwin07)
- Twitter: [@darrenbaldwinjr](https://x.com/darrenbaldwinjr)
- Email: [darren@darrenbaldwin.dev](mailto:darren@darrenbaldwin.dev)