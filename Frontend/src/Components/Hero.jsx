import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.png";

const Hero = () => {
  return (
    <section className="max-padd-container py-20 xl:py-30 bg-deep">
      <div className="flexCenter gap-6 flex-col xl:flex-row ">
        {/* left side */}
        <div className="flex flex-1 flex-col pt-10 xl:pt-12">
          <h1 className="h1">Your Gateway to Great Food!!!</h1>
          <p className="text-xl">
            Order your favorites or book a table — all in one place.
          </p>
          <div className="mt-6">
            <Link to={"/menu"} className="btn-secondary">
              Explore More
            </Link>
          </div>
        </div>
        {/* right side */}
        <div>
          <div>
            <img src={bg} className="w-200 h-auto py-" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
