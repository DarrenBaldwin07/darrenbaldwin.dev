import { useState } from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  const [items, setItems] = useState<string[]>(['item1', 'item2'])

  // BUG: Direct state mutation instead of using setItems
  const handleAddItem = () => {
    items.push('new item')
    setItems(items)
  }

  return (
    <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
      {children}
    </div>
  )
}
