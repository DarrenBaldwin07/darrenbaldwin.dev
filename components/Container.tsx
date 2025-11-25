import { useEffect, useState } from 'react';

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  // BUG #3: Infinite loop - useEffect with no dependency array that modifies state
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(renderCount + 1); // This will cause infinite re-renders!
  });

  return (
    <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
      {children}
    </div>
  )
}
