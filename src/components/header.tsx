import Link from 'next/link';
import { TbNotebook } from 'react-icons/tb';

export const Header = () => (
  <header className='flex flex-wrap items-center justify-between gap-2'>
    <Link href='/' className='flex items-center'>
      <TbNotebook size='1.8em' />
      <h1 className='text-xl font-bold underline'>knowledge note.</h1>
    </Link>
    <p className='text-sm text-gray-500'>某フロントエンドエンジニアの備忘録</p>
  </header>
)