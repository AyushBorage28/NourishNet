import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mission, Vision, Team } from "../assets";

const AboutUs = () => {
  const sections = [
    {
      title: "Vision",
      subheading: "Our Vision",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>Transforming Excess into Impactful Change 🌟</li>
            <li>Bridging the gap between surplus food and hunger.</li>
            <li>Connecting restaurants with NGOs for positive impact.</li>
          </ul>
        </>
      ),
      image: Vision,
    },
    {
      title: "Mission",
      subheading: "Our Mission",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>Empowering Restaurants for Positive Impact 🌍</li>
            <li>Reshaping dining experiences towards social responsibility.</li>
            <li>Fostering a culture of giving through surplus food donation.</li>
          </ul>
        </>
      ),
      image: Mission,
    },
    {
      title: "Team",
      subheading: "Our Team",
      description: (
        <>
          <ul className="list-disc pl-6">
            <li>Meet the Driven Minds Behind NourishNet 👥</li>
            <li>Experts in technology, culinary arts, and sustainability.</li>
            <li>Committed to building a legacy of responsible dining.</li>
          </ul>
        </>
      ),
      image: Team,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change card every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section className="bg-gray-100 dark:bg-gray-800">
      <div className="px-4 py-12 mx-auto max-w-screen-xl">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Learn more about our purpose and mission
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md w-80 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl`}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: index * 0.2, ease: "easeInOut" },
            }}
            exit={{ opacity: 0, x: 50 }}
            style={{ zIndex: 1 }}
          >
            <div className="flex items-center justify-center mb-4">
              {/* Icon here */}
            </div>
            <img src={section.image} alt={section.title} className="mb-4 rounded-lg w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {section.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              {section.subheading}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {section.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutUs;
