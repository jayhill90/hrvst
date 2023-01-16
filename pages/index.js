/* eslint-disable */
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar';
import Hero from '../components/hero'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { SocialIcon } from 'react-social-icons';

export default function Home() {
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
      <Navbar />
      <Hero />
    </header>
    <section class="mx-auto mb-18 pb-20 bg-gray-400 w-full">
      <div class="">
        <div class="flex flex-row justify-center">
          <h2 class="py-6 text-5xl mt-8 font-mono">Latest Releases</h2>
        </div>
        <div class="grid gap-6 pt-4 lg:grid-cols-3 px-8 lg:mx-4 sm:mx-2">
          <div class= "max-w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a href="#">
            <img class="rounded-t-lg" src="/releases/gitup.png" alt="HRVST - Git Up / Synchronic cover art" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Git Up / Synchronic &#91;Late Night Munchies&#93;</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">Almost a year since his debut, HRVST returns to Late Night Munchies with another double track release. This release from HRVST, sees him move towards a more gritty and grimey vibe for the dance floor.</p>
              <a href="https://music.soundsofibiza.co.uk/gitup" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                Pre-Order / Pre-Save
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div class="max-w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a href="#">
              <img class="rounded-t-lg" src="/releases/fragmentation.png" alt="HRVST - R U E'n / Fragmentation cover art" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">R U E'n / Fragmentation &#91;Take A Chance&#93;</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">Released on San Francisco based Take A Chance Records, HRVST delivers a double track EP that push the boundaries of tech house with a tear out bassline on "Fragmentation", and a certified whomper on "R U E'n".</p>
              <a href="https://music.soundsofibiza.co.uk/ruean" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                Stream / Purchase
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div class="max-w-m rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a href="#">
              <img class="rounded-t-lg" src="/releases/courtcase.jpg" alt="HRVST - Court Case cover art." />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Court Case  &#91;Slabbed Out Digital&#93;</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">The second release on HRVST's imprint Slabbed Out Digital, Court Case. harks back to his days growing Cannabis in Northern California. This tune has atmospherics and a solid groove that has a vibe thats perfect for harvest season.</p>
              <a href="https://music.soundsofibiza.co.uk/courtcase" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-3000">
                Stream / Purchase
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          </div>
      </div>
    </section>
    <section class="mx-auto mb-32 bg-gray-800">
      <div class="flex flex-row justify-center">
        <h3 class="py-6 mt-8 text-5xl text-white font-mono">Latest Mixes</h3>
      </div>
      <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 mx-auto w-5/6">
        <div class="p-5 mx-2 h-full">
          <LiteYouTubeEmbed aspectHeight = {9}    aspectWidth = {16}    id={'DDy28bM1KIg'}    title={"The Slabbed Out Sesh"}/>
        </div>
        <div class="p-5 mx-2 h-full">
         <LiteYouTubeEmbed aspectHeight = {9}    aspectWidth = {16}    id={'aWUYoKEMEEQ'}    title={"The Slabbed Out Sesh"}/>
        </div>
        <div class="p-5 mx-2 h-full">
          <LiteYouTubeEmbed aspectHeight = {9}    aspectWidth = {16}    id={'mQn-NMacEQQ'}    title={"The Slabbed Out Sesh"}/>
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
