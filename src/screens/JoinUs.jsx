import { useState } from "react";
import { FaUtensils, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { JoinUsImage } from "../assets";

const JoinUs = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="grid py-8 px-12 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      {/* Left Side: Image */}
   

      {/* Right Side: Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="place-self-center mr-auto lg:col-span-7"
      >
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
          Welcome to NourishNet!
        </h1>
        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Connecting Food and Hearts
        </p>

          <div className="space-y-8 mb-8">
            {/* First Card */}
            <div>
              <a
                href="#"
                onClick={() => handleOptionChange("HoReKa")}
                className={`block p-4 bg-white rounded-lg transition duration-300 hover:bg-gray-100 ${
                  selectedOption === "HoReCa"
                    ? "border-primary-700 border"
                    : "border-transparent"
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className="flex-shrink-0">
                    <FaUtensils className="w-6 h-6 mr-2 text-primary-700" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    HORECA Partners: Make a Difference Through Surplus Food
                  </h2>
                </div>
                <p className="text-gray-600">
                  {" "}
                  Join Us in Minimizing Food Wastage
                </p>
              </a>
            </div>
            <div>
              {/* Second Card */}
              <a
                href="#"
                onClick={() => handleOptionChange("NGO")}
                className={`block p-4 bg-white rounded-lg transition duration-300 hover:bg-gray-100 ${
                  selectedOption === "NGO"
                    ? "border-primary-700 border"
                    : "border-transparent"
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className="flex-shrink-0">
                    <FaHandsHelping className="w-6 h-6 mr-2 text-primary-700" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    NGOs: Contribute to Positive Change Through Food
                    Distribution
                  </h2>
                </div>
                <p className="text-gray-600">
                  Empower Communities, Alleviate Hunger
                </p>
              </a>
            </div>
          </div>

          <a
            href={`/signup/${selectedOption}`}
            className="inline-flex justify-center items-center mt-6 py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#eda277] hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Create Account
          </a>
          </motion.div>
          <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block lg:col-span-5"
      >
        <img src={JoinUsImage} alt="" className="h-full" />
      </motion.div>
    </div>
  );
};

export default JoinUs;
