import { useState, useEffect } from 'react';

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  const [count, setCount] = useState(0);

  // Bug: useEffect with no dependency array causes infinite re-renders
  useEffect(() => {
    setCount(count + 1);
  });

  return (
    <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
      {children}
    </div>
  )
}
