import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Akshayapatra, Marriott, Raddison, Taj, Unicef, WWF, Partnership } from "../assets";

const Stats = () => {
  const partnerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const hoverVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <section className="bg-whitw dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div className="text-left">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-gray-900 lg:mb-4 dark:text-white md:text-4xl">
            Our Impactful Partnerships{" "}
            <img src={Partnership} alt="Partnership" className="h-20 sm:h-16" />
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Together with our partners, we are reducing food waste and making a positive difference in the world.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {[Akshayapatra, Marriott, Raddison, Taj, Unicef, WWF].map((logo, index) => (
            <motion.a
              key={index}
              href="#"
              className="flex justify-center items-center"
              variants={partnerVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.img src={logo} alt={`Partner ${index}`} variants={hoverVariants} className="h-12 sm:h-16" />
            </motion.a>
          ))}
        </div>
        <div className="py-8 max-w-screen-xl lg:py-16">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How We Collaborate</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            We connect the hospitality industry (HORECA) with NGOs to ensure surplus food reaches those in need. Through these partnerships, we are not only preventing food wastage but also contributing to social and environmental sustainability.
          </p>
        </div>
        <a
          href="/signup"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#EDA277] rounded-lg hover:bg-[#DE7E44] transition-colors"
        >
          Join us <FaArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Stats;
