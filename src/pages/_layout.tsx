import { Noto_Sans_JP, Ubuntu } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["200", "500", "800"],
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${ubuntu.className} ${notoSansJp.className} min-h-screen max-w-screen-md m-auto px-4 py-10 flex flex-col justify-between`}
    >
      <div className="flex flex-col gap-10 pb-20">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
