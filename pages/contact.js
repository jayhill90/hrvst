import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
/* eslint-disable */

export default function Press() {
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
      <Navbar />
      <Hero />
    </header>
    <section class="mx-auto mb-18 pb-20 bg-gray-400 w-full">
        <div class="flex flex-wrap justify-center">
            <h2 class="py-4 mt-4 mb-8 font-mono text-5xl">Contact</h2>
        </div> 
        <div class="rounded-lg border border-gray-200 bg-gray-100 shadow-md lg:mx-40 sm:mx-4">
        <div class="flex lg:flex-row flex-wrap mx-auto justify-center text-center lg:px-32">
            <img class="basis-1/2 rounded-t-lg sm:w-full h-3/6" src="BW_Headshot.jpg" alt="HRVST headshot in black and white." />
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