import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import ImageSection from "../components/ImageSection";
import Trial from "../components/Trial";
import Footer from "../components/Footer";
import AboutUs from "../components/Aboutus";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
      {/* <Stats /> */}
      <Features />
      <ImageSection />
      <Trial />
      <Footer />
    </>
  );
};

export default Home;
