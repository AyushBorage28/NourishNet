import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import ImageSection from "../components/ImageSection";
import Trial from "../components/Trial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>


      <Navbar />
    
      <div className="flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
      <Hero />
      </div>
    </div>
    <div className="sm:px-16 px-6 flex justify-center items-center ">
      <div className="xl:max-w-[1280px] w-full">
      <Stats />
      <Features />
      <ImageSection />
      <Trial />
      <Footer />
      </div>
    
      </div>
      
    </>
  );
};

export default Home;
