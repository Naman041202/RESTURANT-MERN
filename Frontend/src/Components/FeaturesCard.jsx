import React from "react";

const FeaturesCard = ({ icons, title, para }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-deep p-4 py-8 rounded-xl w-full max-w-[300px] text-center overflow-hidden break-words h-full">
      <div className="text-5xl mb-2">{icons}</div>

      <div className="flex flex-col items-center">
        <h5 className="text-lg font-bold">{title}</h5>
        <hr className="w-8 bg-secondary h-1 rounded-full border-none my-1" />
      </div>

      <p className="text-gray-700 text-sm break-words mt-2 w-full overflow-hidden">
        {para}
      </p>
    </div>
  );
};

export default FeaturesCard;
