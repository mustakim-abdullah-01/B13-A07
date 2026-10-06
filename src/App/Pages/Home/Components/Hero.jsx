import HeroCards from "./HeroCards";
import { Plus } from "lucide-react";

const Hero = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 mx-auto">
      <div>
        <h1 className="text-5xl text-center text-[#1F2937] font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-center text-[#64748B] mt-4 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br />
          the relationships that matter most.
        </p>
        <div className="flex items-center justify-center">
          <span className="btn bg-[#244D3F] text-white w-[148px] shadow-md shadow-green-500/30">
            <Plus size={16} /> Add a Friend
          </span>
        </div>
      </div>
      <HeroCards />
    </div>
  );
};

export default Hero;
