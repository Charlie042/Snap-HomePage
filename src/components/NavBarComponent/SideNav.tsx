import React, { useState } from "react";
import { CloseMenu } from "../../../public/images";
import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";

type SubItem = {
  title: string;
  icon?: string;
};

type NavItem = {
  title: string;
  subnav?: SubItem[];
};

type SideNavProps = {
  navclose: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  navs: NavItem[];
};

const SideNav: React.FC<SideNavProps> = ({ navclose, isOpen, navs }) => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleSubnav = (index: number) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [index]: !prevOpenItems[index],
    }));
  };

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
        onClick={(e) => e.stopPropagation()}
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
        <div className="flex flex-col gap-5">
          {navs.map((item, index) => (
            <div key={index}>
              {item.subnav ? (
                <div>
                  <button
                    className="flex items-center gap-2 w-full text-left"
                    onClick={() => toggleSubnav(index)}
                  >
                    <h3 className="text-lg">{item.title}</h3>
                    <LuChevronDown
                      className={`transition-transform ${
                        openItems[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Conditionally render subnav items */}
                  {openItems[index] && (
                    <div className="ml-4 mt-2">
                      {item.subnav.map((subItem, subIndex) => (
                        <p key={subIndex} className="text-gray-600 py-1 flex items-center gap-2">
                          <div className="text-xl">
                            {subItem.icon && (
                              <Image
                                src={subItem.icon}
                                alt={subItem.title}
                                width={15}
                                height={10}
                              />
                            )}
                          </div>

                          {subItem.title}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <h3 className="text-lg">{item.title}</h3>
              )}
            </div>
          ))}
          <div className="flex flex-col justify-center items-center gap-5">
            <span>Login</span>
            <div>
              <button className="rounded-full px-16 py-3 border">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
