/* eslint-disable */
import Head from 'next/head'
import Navbar from './components/navbar';
import Hero from './components/hero'
import FeaturedSection from './components/FeaturedSection';
import Release from '../components/release';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedSection />
    </div>
  );
};

export default Home;