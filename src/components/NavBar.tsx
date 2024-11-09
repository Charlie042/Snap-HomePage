"use client"

import React from "react";
import NavItem from "./NavItem"
import { RiTodoFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { IoMdCalendar } from "react-icons/io";
import { HiBell } from "react-icons/hi";
import { IoMdClock } from "react-icons/io";
import { Todo,Calendar,Reminder,Planning } from "../../public/images";


type subItems = {
    title : string
    icon?: any
}

type navItem = {
    title : string
    subnav?: subItems[]
}

const navs: navItem[] = [
  {
    title: "Features",
    subnav: [
      {
        title: "Todo list",
        icon: Todo,
      },
      {
        title: "Calendar",
        icon: Calendar,
      },
      {
        title: "Reminder",
        icon: Reminder
      },
      {
        title: "Planning",
        icon: Planning

      },
    ],
  },
  {
    title: "Company",
    subnav: [
      {
        title: "History",
      },
      {
        title: "Our Team",
      },
      {
        title: "Blog",
      },
    ],
  },
  {
    title: "Careers",
  },
  {
    title: "About",
  },
];
const NavBar = () =>{
    
    return (
      <nav className="flex gap-20 items-center mt-3 mx-auto max-w-[1340px] ">
        {/* desktop view */}
        <h1 className="font-bold text-4xl">snap</h1>
        <div className="flex justify-between w-full max-lg:hidden">
          <div className="flex justify-center gap-16 items-center ">
            <div className="flex gap-9 ">
              {navs.map((items, index) => (
                <NavItem item={items} key={index} />
              ))}
            </div>
          </div>
          <div className="relative flex gap-8 text-sm font-medium">
            <button className="text-gray hover:text-foreground">Login</button>
              <button className="text-gray hover:text-foreground px-5 py-2 rounded-xl border-2 ">
                Register
              </button>
          </div>
        </div>

        {/* mobile view */}
        <div className="text-red-500 lg:hidden">ginger</div>
      </nav>
    );
}

export default NavBar