'use client';

import { pages } from 'app/data/pages';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="Library Logo"
            width={32}
            height={32}
            priority
          />
          <span
            data-testid="title"
            className="self-center text-2xl font-semibold text-white"
          >
            The Great Book Library
          </span>
        </div>
        <div>
          <ul
            data-testid="page-list"
            className="flex flex-row font-medium mt-0 space-x-8"
          >
            {pages.map((item) => (
              <li key={item.id}>
                <Link
                  role="page"
                  href={item.href}
                  className={`block py-2 px-3 hover:text-blue-500 ${
                    pathname === item.href ? 'text-blue-500' : 'text-white'
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
