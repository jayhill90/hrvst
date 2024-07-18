import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.png" alt="HRVST Logo" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/"><a className="hover:underline hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Home</a></Link>
                <Link href="/releases"><a className="hover:underline hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Releases</a></Link>
                <Link href="/events"><a className="hover:underline hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Events</a></Link>
                <Link href="/slabbed-out-digital"><a className="hover:underline hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Slabbed Out Digital</a></Link>
                <Link href="/radio"><a className="hover:underline hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Radio</a></Link>
                <Link href="/info"><a className="hover:underline hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Info</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/"><a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Home</a></Link>
          <Link href="/releases"><a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Releases</a></Link>
          <Link href="/events"><a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Events</a></Link>
          <Link href="/slabbed-out-digital"><a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Slabbed Out Digital</a></Link>
          <Link href="/radio"><a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Radio</a></Link>
          <Link href="/info"><a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Info</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;