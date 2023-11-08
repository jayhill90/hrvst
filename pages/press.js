/* eslint-disable */
import Head from 'next/head'
import Navbar from '../components/navbar';
import Hero from '../components/hero';


export default async function Press() {
    return (
    <>
    <Head>
    <title>HRVST - Press</title>
    <meta name="description" content="Minimal bassline focused tech house DJ, Producer and Visual Artist" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div class="bg-gray-800">
    <header>
      <Navbar />
      <Hero />
    </header>
    <section class="mx-auto mb-18 pb-20 bg-gray-400 w-full">
        <div class="flex flex-wrap justify-center">
            <h2 class="py-6 my-8 text-5xl font-sans">About HRVST</h2>
        </div> 
        <div class="rounded-lg border border-gray-200 bg-gray-100 shadow-md lg:mx-40 sm:mx-4">
        <div class="flex lg:flex-row flex-wrap mx-auto justify-center text-center lg:px-32">
            <img class="basis-1/2 rounded-t-lg sm:w-full h-3/6" src="/RenegadeSmile.png" alt="HRVST performing in Oakland, California." />
            <p class="basis-full text-lg mx-8 mt-4">Producer, DJ, and Visual Designer: HRVST (”Harvest”), is no stranger to the dance music scene. Having spent the last two decades honing his productions, he challenges the perception of genre definitions with a signature sound of minimal, bassline focused tech house and garage.</p>
            <p class="text-lg mx-8 my-4">In July of 2022, he launched his imprint “Slabbed Out Digital” as an offshoot of his monthly radio show on Data Transmission “The Slabbed Out Sesh”, which serves as a platform for testing out new tracks and exploring the breadth of what he refers to as “Slabbed Out” house music.</p>
            <p class="block text-lg mx-8">With no signs of slowing down, HRVST can be found experimenting with electronic circuits, building an analog modular video synthesizer, and creative media design in addition to his music. With releases lining up for 2023, and the successful launch of his record label, it's a safe bet you'll be hearing a lot more from HRVST in the near future.</p>
        </div>
        <div class="flex justify-center items-center mt-4 pb-8">
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
          <h2 class="py-4 text-5xl text-white mb-8 pt-12 font-sans">Media Coverage</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-4 lg:px-8 mx-4 lg:mx-4 sm:mx-2 bg-gray-900 pb-8">
        <div class= "max-w-full rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
            <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src="https://res.cloudinary.com/dszlb3eo2/image/upload/v1683888772/2_akyuld.png" alt="HRVST interview" />
            <div class="p-5">
              <a href="https://edmidentity.com/2023/05/06/hrvst-drippin-sweat-ep/" target="_blank">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">EDMIdentity.com Review</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">HRVST Guides Vibes with Three-Track ‘Drippin’ Sweat’ EP
</p>
              <a href="https://edmidentity.com/2023/05/06/hrvst-drippin-sweat-ep/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                Check It Out
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        <div class= "max-w-full rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
            <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src="https://res.cloudinary.com/dszlb3eo2/image/upload/v1682798035/hmwl.png" alt="HRVST interview" />
            <div class="p-5">
              <a href="https://www.housemusicwithlove.com/2023/music-has-been-one-of-the-things-that-has-kept-people-from-going-over-the-edge-hrvst-interview/" target="_blank">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Interview w/ HouseMusicWithLove.com</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">HRVST was interviewed by HouseMusicWithLove.com and discusses mental health, inspirations and analog video synthesizers.</p>
              <a href="https://www.housemusicwithlove.com/2023/music-has-been-one-of-the-things-that-has-kept-people-from-going-over-the-edge-hrvst-interview/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                Check It Out
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div class= "max-w-full rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
            <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src="/seismic.jpg" alt="Mary Droppinz and Joswa at Seismic Dance Event 5.0" />
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
              <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src="/different-dt.jpg" alt="HRVST - R U E'n / Fragmentation cover art" />
            <div class="p-5">
              <a href="https://datatransmission.co/debut-transmission/hrvst-launches-slabbed-out-digital-with-different-sleeping-people/" target="_blank">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">HRVST launches Slabbed Out Digital</h5>
              </a>
              <p class="mb-8 pb-8 font-normal text-gray-700 dark:text-gray-400">Data Transmission coverage of the launch of Slabbed Out Digital in July, 2022, with Press Release written by HRVST. This release was pivotal in helping HRVST define his soundscape.</p>
              <a href="https://datatransmission.co/debut-transmission/hrvst-launches-slabbed-out-digital-with-different-sleeping-people/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                Check It Out
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div class="max-w-m rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
              <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src="/lnm-dt.jpg" alt="Screenshot of a Data Transmission article press release for HRVST - Finger Wagging / Like A Robot" />
   
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