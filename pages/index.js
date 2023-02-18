/* eslint-disable */
import Head from 'next/head'
import Navbar from '../components/navbar';
import Hero from '../components/hero'
import Release from '../components/release';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

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
          <Release title="Unlearn:Miami - Pop It"
           label="Unlearn Records" 
           writeup="We are proud to unleash our first ever compilation for Miami this March, featuring five exclusive tech house cuts from a crop of new talent alongside the established sound of label boss Doc Brown. HRVST's 'Pop It' employs sinister vocals over a devastating rolling bassline" 
           url="https://music.soundsofibiza.co.uk/popit"
           coverpath="/releases/unlearn-miami.png" 
           released={false} />
          <Release title="Git Up / Synchronic"
            label="Late Night Munchies" 
            writeup="Almost a year since his debut, HRVST returns to Late Night Munchies with another double track release. This release from HRVST, sees him move towards a more gritty and grimey vibe for the dance floor." 
            url="https://music.soundsofibiza.co.uk/gitup" 
            coverpath="/releases/gitup.png" 
            released={true} />
          <Release title="R U E'n / Fragmentation" 
            label="Take A Chance Records" 
            writeup="Released on San Francisco based Take A Chance Records, HRVST delivers a double track EP that push the boundaries of tech house with a tear out bassline on 'Fragmentation', and a certified whomper on 'R U E'n'" 
            url="https://music.soundsofibiza.co.uk/ruean"
            coverpath="/releases/fragmentation.png"
            released={true} />
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
