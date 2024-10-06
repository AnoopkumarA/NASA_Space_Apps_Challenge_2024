import React from 'react';

const EarthFacts = () => {
  return (
    <div className="bg-black dark:bg-gray-900 p-8 lg:flex lg:justify-between items-center w-full">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-4 ">
        <h1 className="text-4xl font-bold text-white relative left-24">
          Earth Overview
        </h1>
        <p className="text-xl font-semibold text-gray-300 relative left-24">
        Earth is the third planet from the Sun and the only known celestial body to support life.
        </p>
        <p className="text-base text-gray-300 relative left-24">
       With an age of approximately 4.54 billion years, it has a diverse environment characterized by its dynamic atmosphere, rich in oxygen and nitrogen, and a variety of ecosystems ranging from lush forests and arid deserts to deep oceans.

The planet has a diameter of about 12,742 kilometers (7,918 miles) and is composed of multiple layers: the solid inner core, the liquid outer core, the mantle, and the crust. About 71% of Earth's surface is covered by water, primarily in the form of oceans, which play a critical role in regulating climate and weather patterns. The remaining 29% consists of continents and islands, featuring diverse landforms and habitats.</p>
        <a
          href="#"
          className="inline-block mt-4 text-lg font-bold text-red-500 hover:text-red-700 relative left-24"
        >
          Get the Facts &rarr;
        </a>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 relative left-48">
        <img
          src="https://s7d1.scene7.com/is/image/wbcollab/TCard_Earth_at_night?qlt=90&fmt=webp&resMode=sharp2"
          alt="Mercury Planet"
          className="rounded-lg shadow-lg w-96"
        />
       
      </div>
    </div>
  );
};

export default EarthFacts;
