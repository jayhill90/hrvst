const FeaturedSection = () => {
    return (
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <a href="https://slabbedout.threadless.com" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-image.jpg" alt="Threadless Store" className="w-64 h-64 object-cover mb-8 md:mb-0" />
          </a>
          <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">As Featured In</h2>
            <div className="flex flex-wrap justify-center md:justify-start">
              <img src="/path-to-data-transmission-logo.png" alt="Data Transmission" className="h-12 mx-4 mb-4" />
              <img src="/path-to-edmidentity-logo.png" alt="EDMIdentity" className="h-12 mx-4 mb-4" />
              <img src="/path-to-house-music-with-love-logo.png" alt="House Music with Love" className="h-12 mx-4 mb-4" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedSection;