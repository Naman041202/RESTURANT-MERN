import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import PopularFoods from "../Components/PopularFoods";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <PopularFoods />
      <Testimonials />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
