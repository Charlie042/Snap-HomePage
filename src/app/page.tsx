import React from "react";
import MakeRemoteWork from "@/components/MakeRemote/MakeRemoteWork";
import HeroImage from "@/components/MakeRemote/HeroImage";
const Home = () => {
    return (
      <div className="max-w-[1220px]  mx-auto">
        <div className="flex max-lg:flex-col-reverse lg:mx-9 md:mx-20 justify-between mt-9 ">
          <div>
            <MakeRemoteWork />
          </div>
          <div>
            <HeroImage />
          </div>
        </div>
      </div>
    );
}

export default Home