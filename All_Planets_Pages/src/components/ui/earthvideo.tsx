import React from 'react';

const EarthVideoSection = () => {
  return (
    
    <section className="bg-black p-8 flex flex-col lg:flex-row lg:justify-between items-center max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-4 text-white">
        <p className="uppercase text-sm text-gray-400">Featured Video</p>
        <h1 className="text-4xl font-semibold text-gray-200">
        Understanding Earth and Its Unique Characteristics
        </h1>
        <p className="text-lg">
        Earth is a complex planet with unique features that support a wide range of life forms. Here’s an overview of some key aspects of Earth:</p>
        <li>Geological Diversity</li>
        <li>Water Cycle</li>
        <li>Biodiversity</li>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 relative left-24">
      <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/PeY9pWJ2Mbk?si=hA2Ciu2hfCw2Oaf2&autoplay=1&mute=1&loop=1&playlist=PeY9pWJ2Mbk&controls=0" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
</iframe>


        <div className="text-sm text-gray-500 mt-2">
          <a href="https://www.youtube.com/embed/PeY9pWJ2Mbk?si=hA2Ciu2hfCw2Oaf2&autoplay=1&mute=1&loop=1&playlist=PeY9pWJ2Mbk&controls=0" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default EarthVideoSection;
