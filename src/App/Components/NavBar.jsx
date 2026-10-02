import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const [showMenue, setShowMenue] = useState(false);

  return (
    <div className="navbar bg-white mx-auto max-md:flex justify-between">
      <div className="navbar-start">
        <Link to={"/"} className="">
          <span className="font-extrabold text-2xl text-[#1F2937s]">Keen</span>
          <span className="text-2xl font-semibold text-[#244D3F]">Keeper</span>
        </Link>
      </div>

      <div className="navbar-end join max-md:hidden">
        <NavLink
          className={({ isActive }) =>
            `border text-success-content border-[#64748B]/30 rounded-l-2xl btn ${isActive ? "bg-[#244D3F] text-white shadow-2xs shadow-success-content" : ""}`
          }
          to={"/"}
        >
          <LuHouse /> Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border text-success-content border-[#64748B]/30 btn ${isActive ? "bg-[#244D3F] text-white shadow-2xs shadow-success-content" : "text-gray-600"}`
          }
          to={"/timeline"}
        >
          <FaRegClock /> Timeline
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border text-success-content border-[#64748B]/30 rounded-r-2xl btn ${isActive ? "bg-green-900 text-white shadow-2xs shadow-success-content" : "text-gray-600"}`
          }
          to={"stats"}
        >
          <TfiStatsUp />
          Stats
        </NavLink>
      </div>

      {/*  */}

      <div className="md:hidden">
        {!showMenue ? (
          <IoMenu
            onClick={() => setShowMenue(!showMenue)}
            onFocus={() => setShowMenue(!showMenue)}
            onBlur={() => setShowMenue(!showMenue)}
            className="btn font-bold btn-soft"
            size={16}
            duration={1.5}
            color="#000"
          />
        ) : (
          <IoClose
            onClick={() => setShowMenue(!showMenue)}
            onBlur={() => setShowMenue(!showMenue)}
            className="btn btn-soft"
            size={24}
            duration={1.5}
            color="#000"
          />
        )}
      </div>

      <div
        className={`absolute duration-1000 border border-[#64748B]/30 shadow-lg right-2 bg-base-300 p-2 rounded-2xl flex flex-col join join-vertical md:hidden ${showMenue === true ? "top-16" : "-top-79"}`}
      >
        <NavLink
          className={({ isActive }) =>
            `border border-[#64748B]/30 rounded-t-2xl w-28 btn ${isActive ? "bg-[#244D3F] text-white" : "text-gray-600"}`
          }
          to={"/"}
        >
          <LuHouse /> Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border border-[#64748B]/30 w-28 btn ${isActive ? "bg-[#244D3F] text-white" : "text-gray-600"}`
          }
          to={"/timeline"}
        >
          <FaRegClock /> Timeline
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border border-[#64748B]/30 rounded-b-2xl w-28 btn ${isActive ? "bg-[#244D3F] text-white" : "text-gray-600"}`
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
