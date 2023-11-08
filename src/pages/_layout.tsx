import { Header } from "@/components/header"
import { Noto_Sans_JP, Ubuntu } from 'next/font/google';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['500', '800']
})
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700']
})


export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={`${ubuntu.className} ${notoSansJp.className} m-auto px-4 py-10 max-w-screen-md flex flex-col gap-10`}>
    <Header />
    {children}
  </div>
)
