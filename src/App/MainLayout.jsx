import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#f8fafcc4] pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
