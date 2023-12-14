import dayjs from "dayjs";
import Link from "next/link";

export const Footer = () => (
  <footer className='text-center'>
    <p className="text-gray-500">
      @{dayjs().get('year')} kca2250 log
    </p>
    <Link href='/about'>
      <p className='text-cyan-700'>
        🌠about me🌠
      </p>
    </Link>
  </footer>
)