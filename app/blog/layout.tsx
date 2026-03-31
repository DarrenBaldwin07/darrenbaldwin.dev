interface BlogLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: BlogLayoutProps) {
  return <div className='prose prose-md'>{children}</div>
}
