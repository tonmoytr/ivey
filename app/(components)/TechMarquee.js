"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import js from "../../public/js.png";
import tail from "../../public/tail.png";
import mongo from "../../public/mongodb.svg";
import vite from "../../public/vite.png";
import next from "../../public/next.png";
import react from "../../public/react.png";

const techLogos = [
  "js.png",
  "react.png",
  "next.png",
  "mongodb.svg",
  "tail.png",
  "vite.png",
  "ver.svg",
];

export default function TechMarquee() {
  return (
    <div className="w-full py-6 bg-gray-900">
      <Marquee speed={50} pauseOnHover={true}>
        {/* {techLogos.map((logo, idx) => (
          <div key={idx} className="mx-6 flex items-center justify-center">
            <Image
              src={`../../public/${logo}`}
              alt={logo}
              width={80}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))} */}
        <Image
          src={js}
          alt="Js logo"
          className="w-20 h-auto md:w-30 md:h-auto mx-10 rounded-2xl"
        />
        <Image
          src={react}
          alt="Js logo"
          className="w-20 h-auto md:w-30 md:h-auto mx-10 rounded-2xl"
        />
        <Image
          src={tail}
          alt="Js logo"
          className="w-20 h-auto md:w-30 md:h-auto mx-10 rounded-2xl"
        />
        <Image
          src={next}
          alt="Js logo"
          className="w-20 h-auto md:w-30 md:h-auto mx-10 rounded-2xl"
        />
        <Image
          src={vite}
          alt="Js logo"
          className="w-20 h-auto md:w-30 md:h-auto mx-10 rounded-2xl"
        />
        <Image
          src={mongo}
          alt="Js logo"
          className="w-20 h-auto md:w-30 md:h-auto mx-10 rounded-2xl"
        />
      </Marquee>
    </div>
  );
}
