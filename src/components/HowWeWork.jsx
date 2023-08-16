import React from 'react';

const HowWeWork = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white text-center">
        How We Work
      </h1>
      <p className="mt-2 text-center text-xl text-gray-600 dark:text-gray-300">
        Discover our process of rescuing and distributing surplus food to make a positive impact on communities.
      </p>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#de7e44] text-white flex-shrink-0">
            {/* Food SVG */}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="sm:w-16 sm:h-16 w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 17l10 5 10-5M2 7l10 5 10-5" />
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Collect Food from HoReCas</h2>
            <p className="leading-relaxed text-base">
              We collaborate with restaurants and hotels to rescue surplus food and prevent wastage.
            </p>
          </div>
       
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Connect HoReCa with NGOs</h2>
            <p className="leading-relaxed text-base">
              We establish partnerships to distribute rescued food to NGOs for further distribution and nourishment.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-[#de7e44] text-white flex-shrink-0">
            {/* Help SVG */}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="sm:w-16 sm:h-16 w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#de7e44] text-white flex-shrink-0">
            {/* Smile SVG */}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="sm:w-16 sm:h-16 w-10 h-10">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l2 2M12 16v.01" />
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">NGOs Donate to Respective Places</h2>
            <p className="leading-relaxed text-base">
              NGOs distribute the rescued food to communities in need, ensuring a positive impact on local nourishment.
            </p>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default HowWeWork;
