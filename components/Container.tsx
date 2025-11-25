'use client';

import { useState } from 'react';

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  const [settings, setSettings] = useState({ theme: 'dark', fontSize: 16 });

  const updateTheme = () => {
    // Bug: Direct state mutation instead of using setSettings
    settings.theme = 'light';
    console.log('Theme updated:', settings.theme);
  };

  return (
    <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
      {children}
    </div>
  )
}
