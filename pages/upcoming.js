/* eslint-disable */
import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'

export default function Upcoming() {
    return (
    <>
    <Head>
    <title>HRVST - Upcoming Dates</title>
    <meta name="description" content="Minimal bassline focused tech house DJ, Producer and Visual Artist. Upcoming shows and tour dates." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div class="bg-gray-800">
    <header>
      <Navbar />
      <Hero />
    </header>
    <section>
    <div class="bg-gray-900">
        <div class="flex flex-row justify-center">
          <h2 class="py-4 mt-4 text-5xl text-white mb-8 font-sans">Upcoming Dates</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-3 px-20 bg-gray-900 pb-8">
        <div class="max-w-m rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
              <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src="/hrvst-dt.png" alt="Screenshot of a Data Transmission article press release for HRVST - Finger Wagging / Like A Robot" />
   
            <div class="p-5 justify-center text-center">
              <a href="https://datatransmission.co/popup-player/">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Slabbed Out Sesh</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">10pm GMT / 5pm EST - December 9th 2023</p>
              <a href="https://datatransmission.co/popup-player/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-3000">
                Popup Player
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div class="max-w-full rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
              <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src="/hrvst-dt.png" alt="The Slabbed Out Sesh on Data Transmission Radio" />
            <div class="p-5 justify-center text-center">
              <a href="https://datatransmission.co/ppup-player/" target="_blank">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Slabbed Out Sesh</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">10pm GMT / 5pm EST - January 6th 2024</p>
              <a href="https://datatransmission.co/popup-player/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-300">
                Popup Player
                <svg aria-hidden="true" class="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div class="max-w-m rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gray-800">
              <img class="rounded-t-lg grayscale hover:grayscale-0 transition-all duration-500" src="/hrvst-dt.png" alt="Screenshot of a Data Transmission article press release for HRVST - Finger Wagging / Like A Robot" />
   
            <div class="p-5 justify-center text-center">
              <a href="https://datatransmission.co/popup-player/">
                <h5 class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Slabbed Out Sesh</h5>
              </a>
              <p class="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">10pm GMT / 5pm EST - February 10th 2024</p>
              <a href="https://datatransmission.co/popup-player/" target="_blank" class="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-3000">
                Popup Player
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