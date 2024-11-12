import React from "react";
import { CloseMenu } from "../../../public/images";
import Image from "next/image";

type SideNavProps = {
  navclose: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const SideNav: React.FC<SideNavProps> = ({ navclose, isOpen }) => {
  return (
    <aside
      className={`fixed inset-0 bg-black bg-opacity-50 h-full z-50 transition-opacity duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => navclose(false)}
    >
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white p-4 ${
          isOpen ? "animate-slide-in" : "animate-slide-out"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        <div className="flex justify-end">
          <Image
            src={CloseMenu}
            alt="close menu"
            onClick={() => navclose(false)}
            className="cursor-pointer"
          />
        </div>
        {/* Sidebar content */}
        <div>Sidebar content goes here</div>
      </div>
    </aside>
  );
};

export default SideNav;
