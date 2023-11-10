import Link from 'next/link';
import Image from 'next/image';

export const Header = () => (
  <header className='flex flex-wrap items-center justify-between gap-2'>
    <Link href='/' className='flex items-center gap-1' >
      <Image src={'/logo.svg'} alt='logo-image' width={30} height={30} />
      <h1 className='text-xl font-bold underline'>knowledge note.</h1>
    </Link>
    <p className='text-sm text-gray-500'>某フロントエンドエンジニアの備忘録</p>
  </header>
)