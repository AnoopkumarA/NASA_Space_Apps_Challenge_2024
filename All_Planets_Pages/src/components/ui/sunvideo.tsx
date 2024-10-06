import React from 'react';

const NasaVideoSection = () => {
  return (
    
    <section className="bg-black p-8 flex flex-col lg:flex-row lg:justify-between items-center max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-4 text-white">
        <p className="uppercase text-sm text-gray-400">Featured Video</p>
        <h1 className="text-4xl font-bold text-gray-200">
          How NASA Uses and Improves Solar Power
        </h1>
        <p className="text-lg">
          From studying life on Earth to powering spacecraft across the solar system, NASA uses solar power to explore near and far.
        </p>
        
        <a href="#" className="inline-block mt-4 text-lg font-bold text-red-500 hover:text-red-700">
          Learn More &rarr;
        </a>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HFT7ATLQQx8?si=wcOMxXITEQHkIoRj&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="text-sm text-gray-500 mt-2">
          <a href="https://www.youtube.com/embed/HFT7ATLQQx8?si=wcOMxXITEQHkIoRj&amp;start=8" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default NasaVideoSection;
