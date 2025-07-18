import React from "react";

type Props = {
  projects: { 
    head: string;
    description: string;
  };
};
const Heading = ({ projects: { head, description } }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 mb-10">
      <h1 className=" text-3xl font-bold">{head}</h1>
      <p className="text-gray-500 text-center">
       {description}
      </p>
    </div>
  );
};

export default Heading;
