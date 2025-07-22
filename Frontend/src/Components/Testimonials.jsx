import React from "react";
import Title from "./Title";
import { IoMdStarHalf, IoMdStar } from "react-icons/io";
import { MdVerified } from "react-icons/md";

import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import food1 from "../assets/food_1.png";
import food2 from "../assets/food_2.png";
import food3 from "../assets/food_3.png";
import food4 from "../assets/food_4.png";

const Testimonials = () => {
  return (
    <div>
      <Title
        title="BITES OF PRAISE!"
        para="Hear what our food lovers have to say about their favorite meals and moments with us!"
      />

      <div className="max-padd-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 lg:gap-20 mb-16 rounded-3xl items-center">
          {/* LEFT SIDE */}
          <div className="hidden sm:flex flex-col items-center justify-center gap-8 px-4">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-secondary mb-2 tracking-wide">
                What People Say
              </h4>
              <p className="text-base text-gray-500 max-w-xs">
                Honest reviews from food lovers just like you. Discover why they
                keep coming back!
              </p>
            </div>

            <div className="flex flex-col gap-2 bg-deep p-4 rounded-lg w-full max-w-[250px] text-center shadow-sm">
              <div className="flex justify-center text-secondary text-xl gap-1">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
              </div>
              <div className="text-sm font-medium text-gray-600">
                More Than{" "}
                <span className="font-bold text-gray-950">25,000 reviews</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 px-2">
            {/* Card 1 */}
            <div className="flex flex-col gap-2 rounded-lg p-4 bg-deep shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src={user1}
                    alt=""
                    height={44}
                    width={44}
                    className="rounded-full"
                  />
                  <h5 className="bold-14">Robert Downey Junior</h5>
                </div>
                <div className="bg-secondary text-white rounded-full flex items-center gap-x-2 p-1 px-2 text-xs font-semibold">
                  <MdVerified />
                  Verified
                </div>
              </div>
              <hr className="h-[1px] w-full my-2 " />
              <div className="flex gap-x-1 text-secondary mt-1 text-xs">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              <h4 className="h4 ">Good food, Loved it!</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit tempora numquam placeat enim iusto id libero reiciendis
                vero eveniet!
              </p>
              <div className="flex gap-x-2 mt-5">
                <img
                  src={food1}
                  alt=""
                  height={44}
                  width={44}
                  className="rounded aspect-square object-cover"
                />
                <img
                  src={food2}
                  alt=""
                  height={44}
                  width={44}
                  className="rounded aspect-square object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-2 rounded-lg p-4 bg-deep shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src={user2}
                    alt=""
                    height={44}
                    width={44}
                    className="rounded-full"
                  />
                  <h5 className="bold-14">Scarlett Johansson</h5>
                </div>
                <div className="bg-secondary text-white rounded-full flex items-center gap-x-2 p-1 px-2 text-xs font-semibold">
                  <MdVerified />
                  Verified
                </div>
              </div>
              <hr className="h-[1px] w-full my-2" />
              <div className="flex gap-x-1 text-secondary mt-1 text-xs">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              <h4 className="h4">Amazing taste & quick service!</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit tempora numquam placeat enim iusto id libero reiciendis
                vero eveniet!
              </p>
              <div className="flex gap-x-2 mt-5">
                <img
                  src={food3}
                  alt=""
                  height={44}
                  width={44}
                  className="rounded aspect-square object-cover"
                />
                <img
                  src={food4}
                  alt=""
                  height={44}
                  width={44}
                  className="rounded aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
