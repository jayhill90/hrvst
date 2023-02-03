import { useState } from 'react'
/* eslint-disable */

export default function Navbar() {
    const [navBar, setNavbar ] = useState(false);

    return ( <nav class="fixed top-0 left-0 z-20 w-screen border-b border-gray-600 bg-zinc-900 px-2 py-2.5 sm:px-4">
    <div class="flex container mx-auto w-full flex-wrap items-center justify-between">
      <a href="https://hrvstmusic.com" class="flex items-center">
        <span class="self-center whitespace-nowrap text-xl font-semibold text-white">HRVST</span>
      </a>
      <div class="flex md:order-2">
        <button onClick={ () => setNavbar(!navBar) } data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div className={`w-full items-center justify-between md:order-1 md:flex md:w-auto  ${ navBar? 'block': 'hidden' }`} id="navbar-sticky">
        <ul class="flex mt-4 flex-col roundedlg border border-gray-700 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium bg-zinc-900">
          <li>
            <a href="/" class="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-700 border-gray-700 md:p-0">Home</a>
          </li>
          <li>
            <a href="/press" class="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-700 border-gray-700 md:p-0">Press</a>
          </li>
          <li>
            <a href="/upcoming" class="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-700 border-gray-700 md:p-0">Upcoming</a>
          </li>
          <li>
            <a href="/contact" class="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-700 border-gray-700 md:p-0">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> )
}