import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

export const TopMenu = () => {
  return (
    <nav className="flex w-full items-center justify-between px-5">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} font-bold antialiased`}></span>
          <span>| Shop</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/category/men">
          Hombres
        </Link>
        <Link
          className="m-2 rounded-md p-2 transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/category/kids">
          Niños
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/search">
          <IoSearchOutline className="h-5 w-5" />
        </Link>
        <Link href="/cart">
          <IoSearchOutline className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );
};
