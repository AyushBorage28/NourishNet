import React from "react";
import { heroImage } from "../assets";

const Hero = () => {
  const location = async () => {
    const successCallback = (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    };

    const errorCallback = (error) => {
      console.log("Error getting location:", error);
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not available.");
    }
  };

  location();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
            Joining Hands, Nourishing Hearts
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Bridging the HoReCa Industry and NGOs for Instant Food Rescue and
            Community Nourishment. Transform Food Waste into Hopeful Meals with
            NourishNet.
          </p>
          <a
            href="/signup"
            className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#eda277] hover:bg-[#de7e44] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Join us
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0  lg:col-span-5 lg:flex">
          <img src={heroImage} alt="mockup" className="w-30 h-30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
