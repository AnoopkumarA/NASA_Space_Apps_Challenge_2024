import React from 'react';

const MercuryFacts = () => {
  return (
    <div className="bg-black dark:bg-gray-900 p-8 lg:flex lg:justify-between items-center w-full">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-4 ">
        <h1 className="text-4xl font-bold text-white relative left-24">
          Sun Overview
        </h1>
        <p className="text-xl font-semibold text-gray-300 relative left-24">
        The Sun is the star at the heart of our solar system.
        </p>
        <p className="text-base text-gray-300 relative left-24">
        The Sun has inspired us since ancient times. It’s central to mythology and religion in cultures around the world, including the ancient Egyptians, the Aztecs of Mexico, Native American tribes of North and South America, the Chinese, and many others.

Countless musicians have written songs about the Sun. The Beatles had a hit in 1969 with “Here Comes the Sun.” Other popular songs that reference the Sun include: “Walkin’ on the Sun” by Smashmouth; “Ain’t No Sunshine” by Bill Withers; “Walking on Sunshine” by Katrina and the Waves; “Pocketful of Sunshine” by Natasha Bedingfield; and “Let the Sunshine In” by the Fifth Dimension.

If you're Superman or a fellow Kryptonian of comic book fame, your powers are heightened by the yellow glow of our Sun. There are several science fiction films featuring the Sun in the storyline.
        </p>
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5AmhMBcatnCljB2LJmwcuKOH5EX_x8H_4A&s" // Replace with your image path
          alt="Mercury Planet"
          className="rounded-lg shadow-lg w-96"
        />
       
      </div>
    </div>
  );
};

export default MercuryFacts;
