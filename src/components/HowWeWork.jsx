
import { motion } from "framer-motion";
import { CollectFood, FoodDonation, NgoDonate } from "../assets";

const HowWeWork = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const subsectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  return (
    <div className="py-12 px-4 mx-auto max-w-screen-xl">
      <div className="text-center">
        <motion.h1
          className="text-3xl font-extrabold text-gray-800 dark:text-white"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          How We Work
        </motion.h1>
        <motion.p
          className="mt-2 text-xl text-gray-600 dark:text-gray-300"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          Discover our process of rescuing and distributing surplus food to
          make a positive impact on communities.
        </motion.p>
      </div>
      <motion.section
        className="bg-gray-100 dark:bg-gray-800"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="py-12 px-4 mx-auto max-w-screen-xl">
          {/* First Subsection */}
          <motion.div
            className="flex flex-col items-center md:flex-row md:space-x-8"
            variants={subsectionVariants}
          >
            <motion.img
              src={CollectFood}
              alt="Collect Food"
              className="w-32 h-35 md:w-48 md:h-48 rounded-full bg-white p-3"
              whileHover={{ scale: 1.1 }}
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Collect Food from HoReCas
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We collaborate with restaurants and hotels to rescue surplus food
                and prevent wastage.
              </p>
            </div>
          </motion.div>

          {/* Second Subsection */}
          <motion.div
            className="flex flex-col items-center md:flex-row md:space-x-8 mt-12"
            variants={subsectionVariants}
          >
            <motion.img
              src={FoodDonation}
              alt="Connect Horeca with NGOs"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white p-3"
              whileHover={{ scale: 1.1 }}
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Connect HoReCa with NGOs
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We establish partnerships to distribute rescued food to NGOs for
                further distribution and nourishment.
              </p>
            </div>
          </motion.div>

          {/* Third Subsection */}
          <motion.div
            className="flex flex-col items-center md:flex-row md:space-x-8 mt-12"
            variants={subsectionVariants}
          >
            <motion.img
              src={NgoDonate}
              alt="NGOs Donate to Respective Places"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white p-3"
              whileHover={{ scale: 1.1 }}
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                NGOs Donate to Respective Places
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                NGOs distribute the rescued food to communities in need, ensuring
                a positive impact on local nourishment.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowWeWork;