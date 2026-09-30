import { FaRegClock } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <Link to={"/"} className="">
          <span className="font-extrabold text-2xl text-[#1F2937s]">Keen</span>
          <span className="text-2xl font-semibold text-green-900">Keeper</span>
        </Link>
      </div>

      <div className="navbar-end">
        <NavLink
          className={({ isActive }) =>
            `btn ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`
          }
          to={"/"}
        >
          <LuHouse /> Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `btn ${isActive ? "bg-green-900 text-white" : "text-gray-600"}`
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
    </div>
  );
};

export default NavBar;
