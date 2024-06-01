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
          <h2 class="py-6 text-5xl mt-8 font-sans">Latest Releases</h2>
        </div> 
        <div class="grid gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3 px-8 lg:mx-4 sm:mx-2">
        <Release title="Pulse Rate"
            label="Unlearn:Records"
            writeup="Part of the Unlearn:Miami 2024 compilation"
            url="https://www.beatport.com/track/pulse-rate/18769046"
            coverpath="/releases/unlearn.webp"
            released={true} />
        <Release title="Bumpin Summer EP w/ Jahir and ZZISCO"
            label="Take A Chance Records"
            writeup="Three bumping wonky Summer vibes from Take A Chance Records."
            url="https://triplepoint.ffm.to/bumpin-summer-ep"
            coverpath="/releases/bumpinsummer.jpeg"
            released={true} />
        <Release title="Bassbin Lifestyle EP" 
            label="Slabbed Out Digital" 
            writeup="Slabbed Out Digital celebrates its 1st birthday with a new 4 track EP from HRVST that Tough Love described as 'dirty chuggers'"
            url="https://music.soundsofibiza.co.uk/bassbinlifestyleep"
            coverpath="/releases/coverart-smallfile.png"
            released={true} />
        <Release title="Drippin Sweat EP" 
            label="Slabbed Out Digital" 
            writeup="HRVST returns to Slabbed Out Digital for the first release from the imprint of 2023, delivering three certified 2 step rollers on the Drippin Sweat EP"
            url="https://music.soundsofibiza.co.uk/drippinsweat"
            coverpath="/releases/drippinsweat.png"
            released={true} />
          <Release title="Unlearn:Miami - Pop It"
           label="Unlearn Records" 
           writeup="We are proud to unleash our first ever compilation for Miami this March, featuring five exclusive tech house cuts from a crop of new talent alongside the established sound of label boss Doc Brown. HRVST's 'Pop It' employs sinister vocals over a devastating rolling bassline" 
           url="https://music.soundsofibiza.co.uk/popit"
           coverpath="/releases/unlearn-miami.png" 
           released={true} />
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
          <Release title="Court Case" 
            label="Slabbed Out Digital" 
            writeup="Released on HRVST's label Salbbed Out Digital, this vocal samples an iconic scene from one of Johnny Depp's best roles as George Jung in a court house after shipping a ton of cannabis into Chicago." 
            url="https://music.soundsofibiza.co.uk/courtcase"
            coverpath="https://res.cloudinary.com/dszlb3eo2/image/upload/c_scale,w_500/v1682459534/ReleaseArtwork/CourtCase.png.jpg"
            released={true} />
          <Release title="Different / Sleeping People" 
            label="Slabbed Out Digital" 
            writeup="The debut release for Slabbed Out Digital saw a Top 100 Tech House chart position on Beatport and features two groovy cuts from HRVST.  HRVST delivers a clinical in why Slabbed Out Digital is the home for minimal glitchy house music with atmosphere, emotion, and banging bass weight laden grooves. " 
            url="https://music.soundsofibiza.co.uk/differentsleepingpeople"
            coverpath="https://res.cloudinary.com/dszlb3eo2/image/upload/c_scale,w_500/v1682459423/ReleaseArtwork/DifferentSleepingPeople.jpg.jpg"
            released={true} />
          </div>
      </div>
    </section>
    <section class="mx-auto mb-32 bg-gray-800">
      <div class="mx-auto">
      <div class="flex flex-row justify-center">
        <h3 class="py-6 mt-8 text-5xl text-white font-sans">Send Promos to HRVST</h3>
      </div>
      <iframe
              title="Send Promos to HRVST"
              src="https://tstack.app/hrvst/embed/send?isDarkMode=true"
              onload="() => window.frames[0].document.documentElement.style.backgroundColor=#141414"
              width="100%"
              height="100%"
              style={{width: 100 + 'vh', height: 100 + 'vh'}}
              scrolling="yes"
              frameBorder="0"
              allowtransparency="true"
      ></iframe>
      </div>
    </section>
    <section class="mx-auto mb-32 bg-gray-800">
      <div class="flex flex-row justify-center">
        <h3 class="py-6 mt-8 text-5xl text-white font-sans">Latest Mixes</h3>
      </div>
      <div class="grid gap-6 lg:grid-cols-2 md:grid-cols-2 mx-auto w-5/6">
        <div class="p-5 mx-2 h-full">
          <LiteYouTubeEmbed aspectHeight = {9} aspectWidth = {16} id={'PEEA9kYwRH4'} title={"HRVST Live in Dallas Texas"} />
        </div>
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
