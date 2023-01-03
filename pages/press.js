/* eslint-disable */
import Head from 'next/head'
import { useState } from 'react'


export default function Press() {
    const [navBar, setNavbar ] = useState(false);

    return (
    <>
    <Head>
    <title>HRVST</title>
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
                <a href="/" class="block rounded py-2 pl-3 pr-4 text-gray-400 md:bg-transparent md:p-0 dark:hover:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/press" class="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">Press</a>
              </li>
              <li>
                <a href="/upcoming" class="block rounded py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">Upcoming</a>
              </li>
              <li>
                <a href="/contact" class="block rounded py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">Contact</a>
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
            <h2 class="py-4 text-4xl">About HRVST</h2>
        </div> 
        <div class="rounded-lg border border-gray-200 bg-gray-100 shadow-md lg:mx-40 sm:mx-4">
        <div class="flex lg:flex-row flex-wrap mx-auto justify-center text-center lg:px-32">
            <img class="basis-1/2 rounded-t-lg sm:w-full h-3/6" src="/RenegadeSmile.png" alt="HRVST performing in Oakland, California." />
            <p class="basis-full text-lg mx-8 mt-4">Producer, DJ, and Visual Designer: HRVST (”Harvest”), is no stranger to the dance music scene. Having spent the last two decades honing his productions, he challenges the perception of genre definitions with a signature sound of minimal, bassline focused tech house and garage.</p>
            <p class="text-lg mx-8 my-4">In July of 2022, he launched his imprint “Slabbed Out Digital” as an offshoot of his monthly radio show on Data Transmission “The Slabbed Out Sesh”, which serves as a platform for testing out new tracks and exploring the breadth of what he refers to as “Slabbed Out” house music.</p>
            <p class="block text-lg mx-8">With no signs of slowing down, HRVST can be found experimenting with electronic circuits, building an analog modular video synthesizer, and creative media design in addition to his music. With releases lining up for 2023, and the successful launch of his record label, it's a safe bet you'll be hearing a lot more from HRVST in the near future.</p>
        </div>
        <div class="flex justify-center items-center mt-4">
            <a
            class="inline-block px-7 py-3 mb-1 bg-gray-800 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded-lg hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            href="https://slabbedout.live/hrvst"
            target="_blank"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            >Download Press Kit</a>
            </div>
        </div>   
    </section>
    <section>
    <div class="bg-gray-900">
        <div class="flex flex-row justify-center">
          <h2 class="py-4 text-4xl text-white mb-8">Media Coverage</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-3 lg:px-8 mx-4 lg:mx-4 sm:mx-2 bg-gray-900 pb-8">
          <div class= "max-w-full rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
            <img class="rounded-t-lg" src="/seismic.jpg" alt="Mary Droppinz and Joswa at Seismic Dance Event 5.0" />
            <div class="p-5">
              <a href="https://datatransmission.co/blog/reviewed-seismic-dance-event-5-0/" target="_blank">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">HRVST Review's Seismic Dance Event</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">With writing as another creative outlet, HRVST represented Data Transmission at Seismic Dance Event 5.0 in 2022. HRVST handled social media updates on Instagram  as well as a Pre-Festival episode of The Slabbed Out Sesh, in addition to this write up.</p>
              <a href="https://datatransmission.co/blog/reviewed-seismic-dance-event-5-0/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                Check It Out
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div class="max-w-full rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
              <img class="rounded-t-lg" src="/different-dt.jpg" alt="HRVST - R U E'n / Fragmentation cover art" />
            <div class="p-5">
              <a href="https://datatransmission.co/debut-transmission/hrvst-launches-slabbed-out-digital-with-different-sleeping-people/" target="_blank">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">HRVST launches Slabbed Out Digital</h5>
              </a>
              <p class="lg:mb-16 sm:mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">Data Transmission coverage of the launch of Slabbed Out Digital in July, 2022, with Press Release written by HRVST. This release was pivotal in helping HRVST define his soundscape.</p>
              <a href="https://datatransmission.co/debut-transmission/hrvst-launches-slabbed-out-digital-with-different-sleeping-people/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                Check It Out
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div class="max-w-m rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
              <img class="rounded-t-lg" src="/lnm-dt.jpg" alt="Screenshot of a Data Transmission article press release for HRVST - Finger Wagging / Like A Robot" />
   
            <div class="p-5">
              <a href="https://datatransmission.co/debut-transmission/hrvst-announces-his-two-track-ep-via-late-night-munchies/">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">HRVST releases his first 2 track EP on Late Night Munchies</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">Data Transmission write up for HRVST's first EP of 2022, and first release on Seattle based record label Late Night Munchies. This release garnered global support, and reached #2 on Beatport's Minimal Deep Tech Release charts.</p>
              <a href="https://datatransmission.co/debut-transmission/hrvst-announces-his-two-track-ep-via-late-night-munchies/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-3000">
                Check It Out
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          </div>
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