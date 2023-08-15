import React from "react";
import { HoReCa, NGO } from "../assets";
const ImageSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
          Transforming Excess into Blessings in Real Time
          </h2>
          <p className="mb-4">
            Our visionary web platform redefines the heart of hospitality by
            channeling surplus food from restaurants directly to those in need
            through instantaneous NGO partnerships.
          </p>
          <p>
          No more wasted potential, no more untouched meals. With NourishNet, every plate that remains untouched becomes a chance for a better tomorrow. 
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={NGO}
              alt="office content 2"
            />
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg  mt-4 lg:mt-10">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={HoReCa}
              alt="office content 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
