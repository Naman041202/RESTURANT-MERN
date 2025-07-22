import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Item from "./Item";

const PopularFoods = () => {
  const { foods } = useContext(ShopContext);
  const [popularFoods, setPopularFoods] = useState([]);

  useEffect(() => {
    const data = foods.filter((item) => item.popular);
    setPopularFoods(data.slice(0, 6));
  }, [foods]);
  return (
    <section className="max-padd-container">
      <Title
        title="HOT PICKS & FRESH BITES"
        para="From quick bites to full-course delights — explore a variety of flavors crafted to satisfy every craving."
      />
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="h-[255px]"
      >
        {popularFoods.map((food) => (
          <SwiperSlide key={food._id} className="pl-16">
            <Item food={food} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularFoods;
