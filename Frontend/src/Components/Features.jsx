import React from "react";
import Title from "./Title";
import FeaturesCard from "./FeaturesCard";
import { MdDeliveryDining } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LuChefHat } from "react-icons/lu";
import { GiHotMeal } from "react-icons/gi";

const Features = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 xl:px-16">
      <Title
        title="WHY CHOOSE US?"
        para="Discover what makes us stand out — from kitchen to doorstep, we deliver excellence every step of the way."
      />

      <div className="grid grid-cols-1 pt-10 pb-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12 place-items-center">
        <FeaturesCard
          icons={<MdDeliveryDining />}
          title="Fast Delivery"
          para="Get your food delivered hot and fresh at lightning speed. No delays, just deliciousness on time!"
        />
        <FeaturesCard
          icons={<GiHotMeal />}
          title="Hot Meals"
          para="Savor piping hot, freshly prepared meals made with love and served with warmth every time."
        />
        <FeaturesCard
          icons={<SlCalender />}
          title="Reservations"
          para="Book your table in seconds and skip the wait. Dining made easy with our hassle-free reservations!"
        />
        <FeaturesCard
          icons={<LuChefHat />}
          title="Expert Chefs"
          para="Our seasoned chefs craft every dish with mastery, turning simple ingredients into culinary perfection."
        />
      </div>
    </section>
  );
};

export default Features;
