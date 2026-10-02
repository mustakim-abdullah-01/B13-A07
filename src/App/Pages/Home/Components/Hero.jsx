import { FaPlus } from "react-icons/fa";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-10">
      <div>
        <h1 className="text-5xl text-center text-[#1F2937] font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-center text-[#64748B] mt-4 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br />
          the relationships that matter most.
        </p>
        <div className="flex justify-center items-center">
          <button className="btn bg-[#244D3F] text-white w-[148px] shadow shadow-primary-content">
            <FaPlus /> Add a Friend
          </button>
        </div>
      </div>
      <HeroCards />
    </div>
  );
};

export default Hero;
