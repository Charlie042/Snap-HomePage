import React from "react";
import { Databiz,Audiophile,Meet,Maker } from "../../../public/images";
import Image from "next/image";
const MakeRemoteWork = () =>{
    return (
      <div className="  flex justify-between flex-col my-28 gap-20">
        <div className="flex flex-col gap-20">
          <h1 className="xl:text-7xl text-6xl font-bold text-start max-lg:hidden">
            <span className="block">Make</span>
            <span className="block">Remote Work</span>
          </h1>
          {/* mobile view */}
          <h1 className=" lg:hidden text-4xl font-bold text-center  md:text-5xl">
            Make remote Work
          </h1>
          <p className="xl:text-xl text-lg font-medium text-gray max-lg:hidden">
            <span className="block">
              Get your team in sync, no matter your location.
            </span>
            <span className="block">
              Streamline processes, create team rituals,and <br /> watch
              productivity soar.
            </span>
          </p>
          {/* mobile view */}
          <p className=" sm:text-xl md:text-2xl text-gray text-center lg:hidden">
            <span className="block">Get your team in sync, no matter your</span>{" "}
            location. Streamline processes create{" "}
            <span className="block">
              {" "}
              team rituals,and watch productivity soar.
            </span>
          </p>
          <div className="max-lg:mx-auto">
            <button className="border  max-lg:bg-black text-white px-9 py-4 rounded-2xl text-lg font-bold lg:text-gray hover:text-foreground">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex md:gap-9 gap-3 justify-center">
          <Image
            src={Databiz}
            alt="databiz icon"
            width={120}
            height={60}
            className="object-contain max-sm:w-20"
          />
          <Image
            src={Audiophile}
            alt="Audiophile icon"
            className="object-contain max-sm:w-14"
          />
          <Image
            src={Meet}
            alt="Meet icon"
            className="object-contain max-sm:w-16"
          />
          <Image
            src={Maker}
            alt="Maker icon"
            className="object-contain max-sm:w-16"
          />
        </div>
        {/* mobile view */}

        <div></div>
      </div>
    );
}
export default MakeRemoteWork