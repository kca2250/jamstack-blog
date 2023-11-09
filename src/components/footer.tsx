import dayjs from "dayjs";
import Link from "next/link";

export const Footer = () => (
  <footer className='text-center'>
    <p className="text-gray-500">
      @2021 knowledge box
      @{dayjs().get('year')} knowledge note.
    </p>
    <Link href='/about'>
      <p className='text-cyan-700'>
        🌠about me🌠
      </p>
    </Link>
  </footer>
)