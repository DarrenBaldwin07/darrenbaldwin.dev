interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  // Bug: Attempting to use state without importing useState
  let [count, setCount] = [0, () => {}];

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16" onClick={handleClick}>
      {children}
    </div>
  )
}
