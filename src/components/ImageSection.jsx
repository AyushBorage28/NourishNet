import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { HoReCa, NGO } from "../assets";

const ImageSection = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    ease: "easeOut",
    duration: 1.2, // Increase duration for smoother transition
    delay: 0.5, // Add a delay for a staggered effect
  };
  return (
    <motion.section
      className="bg-white dark:bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <motion.div
          className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
          variants={variants}
        >
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Transforming Excess into Blessings in Real Time
          </h2>
          <p className="mb-4">
            Our visionary web platform redefines the heart of hospitality by
            channeling surplus food from restaurants directly to those in need
            through instantaneous NGO partnerships.
          </p>
          <p>
            No more wasted potential, no more untouched meals. With NourishNet,
            every plate that remains untouched becomes a chance for a better
            tomorrow.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 gap-4 mt-8"
          variants={variants}
        >
          <motion.div
            className="relative h-96 overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={NGO}
              alt="office content 2"
            />
          </motion.div>
          <motion.div
            className="relative h-96 overflow-hidden rounded-lg  mt-4 lg:mt-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={HoReCa}
              alt="office content 1"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImageSection;
