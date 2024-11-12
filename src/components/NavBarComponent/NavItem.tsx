"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import Image from "next/image";

type subItems = {
  title: string;
icon?: string

};

type navItem = {
  title: string;
  subnav?: subItems[];
};

type navProps = {
  item: navItem;
};

const NavItem: React.FC<navProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeOut = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeOut.current) clearTimeout(timeOut.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeOut.current = setTimeout(() => setIsOpen(false), 300);
  };

  useEffect(() => {
    return () => {
      if (timeOut.current) clearTimeout(timeOut.current);
    };
  }, []);

  if (item.subnav) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center gap-2 text-gray hover:text-black text-base">
          {item.title}
          <LuChevronDown
            className={`transition-all duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute right-0   w-40 pt-2 translate-y-4 duration-700 transition-all rounded-lg bg-white shadow-2xl border-gray border-opacity-10  border">
            <ul>
              {item.subnav.map((data, index) => (
                <li
                  key={index}
                  className="px-4 py-2 flex gap-3 cursor-pointer hover:text-foreground rounded-md text-sm text-gray"
                >
                  <div className="text-xl">
                    {data.icon && <Image src={data.icon} alt={data.title} width={15} height={10}/> }
                    </div>

                  {data.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return <div className="text-gray hover:text-black cursor-pointer">{item.title}</div>;
};

export default NavItem;
