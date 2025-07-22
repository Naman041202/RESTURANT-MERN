import React from "react";

const Title = ({ title, para }) => {
  return (
    <div className="text-center pt-30 pb-6">
      <h2 className="h2 text-center pb-2">{title}</h2>
      <p className="block mx-auto text-center text-lg break-words max-w-[600px] mb-6">
        {para}
      </p>
    </div>
  );
};

export default Title;
