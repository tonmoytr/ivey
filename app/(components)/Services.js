import React from "react";
import ComputerTwoToneIcon from "@mui/icons-material/ComputerTwoTone";

export default function Services() {
  return (
    <div id="services" className="grid grid-cols-1 md:grid-cols-3 border border-gray-400 my-10">
      <div className="border-b md:border-r border-gray-400 text-center p-6 hover:bg-gray-500">
        <figure>
          <ComputerTwoToneIcon className="text-white" sx={{ fontSize: 150 }} />
        </figure>
        <article className="text-2xl font-semibold text-white">Mobile First Sites</article>
      </div>
      <div className="border-b md:border-r border-gray-400 text-center p-6 hover:bg-gray-500">
        <figure>
          <ComputerTwoToneIcon className="text-white" sx={{ fontSize: 150 }} />
        </figure>
        <article className="text-2xl font-semibold text-white">Seamless Adaptation</article>
      </div>
      <div className=" text-center p-6 hover:bg-gray-500">
        <figure>
          <ComputerTwoToneIcon className="text-white" sx={{ fontSize: 150 }} />
        </figure>
        <article className="text-2xl font-semibold text-white">Site Optimization</article>
      </div>
    </div>
  );
}
