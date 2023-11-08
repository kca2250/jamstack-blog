export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='m-auto px-4 py-2 max-w-screen-md'>
      {children}
    </div>
  )
}