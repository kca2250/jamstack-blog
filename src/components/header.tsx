import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export function Header() {
  const currentRoute = useRouter();
  const isAboutPage = currentRoute.asPath === "/about";

  const displayAboutPage = isAboutPage ? null : (
    <Link href="/about" className="text-gray-700 underline">
      about me
    </Link>
  );

  return (
    <header className="flex flex-wrap items-center justify-between">
      <Link href="/" className="flex items-center gap-1">
        <Image src={"/logo.svg"} alt="logo-image" width={30} height={30} />
        <h1 className="text-xl font-bold">biii_grrr</h1>
      </Link>
      {displayAboutPage}
    </header>
  );
}
