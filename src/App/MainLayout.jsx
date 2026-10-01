import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#F8FAFC] container mx-auto pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
