import Head from 'next/head'
import { useState } from 'react'
/* eslint-disable */

export default function Press() {
    const [navBar, setNavbar ] = useState(false);

    return (
    <>
    <Head>
    <title>HRVST - Contact</title>
    <meta name="description" content="Minimal bassline focused tech house DJ, Producer and Visual Artist" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div class="bg-gray-800">
    <header>
      <nav class="fixed top-0 left-0 z-20 w-screen border-b border-gray-400 bg-gray-900 px-2 py-2.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4">
        <div class="flex container mx-auto w-full flex-wrap items-center justify-between">
          <a href="https://hrvstmusic.com" class="flex items-center">
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">HRVST</span>
          </a>
          <div class="flex md:order-2">
            <button onClick={ () => setNavbar(!navBar) } data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`w-full items-center justify-between md:order-1 md:flex md:w-auto  ${ navBar? 'block': 'hidden' }`} id="navbar-sticky">
            <ul class="flex mt-4 flex-col roundedlg border border-gray-100 bg-gray-500 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
              <li>
                <a href="/" class="block rounded py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 hover:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/press" class="block rounded py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">Press</a>
              </li>
              <li>
                <a href="/upcoming" class="block rounded py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-gray-700  hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">Upcoming</a>
              </li>
              <li>
                <a href="/contact" class="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">Contact</a>
              </li>
            </ul>s
          </div>
        </div>
      </nav>
      <div class="relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundPosition: '50%', backgroundImage: `url(/Banner.13.png)`, height: 600 + 'px', opactiy: '50' + '%' }}>
        <div class="flex h-full flex-col items-center justify-center">
          <img class="mt-6 mb-6 pt-12 lg:px-14" src="/HRVST_WHITE_LOGO.png" />
          <div class="flex flex-row items-center justify-between bg-black opacity-90">
            <h3 class="p-2 justify-self-center lg:text-3xl text-xl font-bold text-white">Underground Minimal Bassline Focused Tech House</h3>
          </div>
        </div>
      </div>
    </header>
    <section class="mx-auto mb-18 pb-20 bg-gray-400 w-full">
        <div class="flex flex-wrap justify-center">
            <h2 class="py-4 text-4xl">Contact</h2>
        </div> 
        <div class="rounded-lg border border-gray-200 bg-gray-100 shadow-md lg:mx-40 sm:mx-4">
        <div class="flex lg:flex-row flex-wrap mx-auto justify-center text-center lg:px-32">
            <img class="basis-1/2 rounded-t-lg sm:w-full h-3/6" src="/BW_HEADSHOT.jpg" alt="HRVST headshot in black and white." />
            <p class="basis-full text-lg mx-8 mt-4">Bookings & General Inquiries: <a href="mailto:jay@slabbedout.live">jay@slabbedout.live</a>.</p>
            <p class="text-lg mx-8 mt-4">Licensing & Remixes: <a href="mailto:hrvst@soundsofibiza.co.uk">hrvst@soundsofibiza.co.uk</a>.</p>
        </div> 
        <p class="text-lg mx-8 mt-4 text-center mb-2"><a href="https://hrvst.slabbedout.live">Socials</a>.</p>

        </div>
    </section>
    <footer class="bg-gray-800 text-center lg:text-left">
      <div class="text-gray-100 text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a class="text-gray-100" href="https://slabbedout.live">Slabbed Out Digital LLC.</a>
      </div>
    </footer>
    </div>
    </>
    )
}