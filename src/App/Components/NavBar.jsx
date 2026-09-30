import { Cancel01Icon } from "@animateicons/react/huge";
import { MenuIcon } from "@animateicons/react/lucide";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const [showMenue, setShowMenue] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto max-md:flex justify-between">
      <div className="navbar-start">
        <Link to={"/"} className="">
          <span className="font-extrabold text-2xl text-[#1F2937s]">Keen</span>
          <span className="text-2xl font-semibold text-[#244D3F]">Keeper</span>
        </Link>
      </div>

      <div className="navbar-end max-md:hidden">
        <NavLink
          className={({ isActive }) =>
            `btn ${isActive ? "bg-[#244D3F] text-white" : "text-gray-600"}`
          }
          to={"/"}
        >
          <LuHouse /> Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `btn ${isActive ? "bg-[#244D3F] text-white" : "text-gray-600"}`
          }
          to={"/timeline"}
        >
          <FaRegClock /> Timeline
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `btn ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`
          }
          to={"stats"}
        >
          <TfiStatsUp />
          Stats
        </NavLink>
      </div>
      <div className="md:hidden">
        {!showMenue ? (
          <MenuIcon
            onClick={() => setShowMenue(!showMenue)}
            className="btn btn-soft"
            size={24}
            duration={1.5}
            color="#000"
          />
        ) : (
          <Cancel01Icon
            onClick={() => setShowMenue(!showMenue)}
            className="btn btn-soft"
            size={24}
            duration={1.5}
            color="#000"
          />
        )}
      </div>

      <div
        className={`absolute duration-1000  right-2 bg-base-300 p-2 rounded-xl flex flex-col gap-1 ${showMenue === true ? "top-16" : "-top-79"}  `}
      >
        <NavLink
          className={({ isActive }) =>
            `w-28 btn ${isActive ? "bg-[#244D3F] text-white" : "btn-outline border-gray-300 text-gray-600"}`
          }
          to={"/"}
        >
          <LuHouse /> Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `w-28 btn ${isActive ? "bg-[#244D3F] text-white" : "btn-outline border-gray-300 text-gray-600"}`
          }
          to={"/timeline"}
        >
          <FaRegClock /> Timeline
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `w-28 btn ${isActive ? "bg-[#244D3F] text-white" : "btn-outline border-gray-300 text-gray-600"}`
          }
          to={"stats"}
        >
          <TfiStatsUp />
          Stats
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
