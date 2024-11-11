import React from "react";
import { HeroDesktop,HeroMobile  } from "../../../public/images";
import Image from "next/image";
const HeroImage = () =>{
    return (
      <>
        <div className="max-lg:hidden">
          <Image src={HeroDesktop} alt="Hero image" width={500} className="object-contain xl:w-[500px] lg:w-[400px] mt-14" />
        </div>
        <div className="lg:hidden flex justify-center">
            <Image src={HeroMobile} alt="Hero Mobile" width={600}/>
        </div>
      </>
    );
}

export default HeroImage