import { BsInboxes } from 'react-icons/bs';

export const Header = () => (
  <header className='flex flex-wrap items-center justify-between gap-2'>
    <div className='flex items-center gap-2'>
      <BsInboxes size='1.8em' />
      <h1 className='text-xl font-bold'>knowledge box</h1>
    </div>
    <p className='text-sm text-gray-500'>某フロントエンドエンジニアの備忘録</p>
  </header>
)