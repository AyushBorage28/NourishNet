import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Akshayapatra,
  Marriott,
  Raddison,
  Taj,
  Unicef,
  WWF,
  Partnership,
} from "../assets";

const Stats = () => {
  const partnerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const hoverVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center tracking-tight leading-tight text-gray-900 lg:mb-4 dark:text-white md:text-4xl">
          Our Impactful Partnerships
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Akshayapatra}
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Unicef}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Marriott}
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={Taj}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={Raddison}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
