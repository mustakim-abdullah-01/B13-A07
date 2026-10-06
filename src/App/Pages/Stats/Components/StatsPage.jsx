import { useContext } from "react";
import { FriendContext } from "../../../../Context/Context";
import NoLogs from "../../../Components/NoLogs";
import PieChartComponent from "./PieChart";

const StatsPage = () => {
  const Context = useContext(FriendContext);

  const { FriendLogObjectArray } = Context;

  return (
    <div>
      <div className="container mx-auto ">
        <div className="p-8 mb-20 border rounded-lg border-slate-300">
          <p className="text-[#244D3F] font-medium text-xl mb-6">
            By Interaction Type
          </p>
          <div className="flex items-center justify-center mb-6">
            {FriendLogObjectArray.length === 0 ? (
              <NoLogs />
            ) : (
              <PieChartComponent />
            )}
          </div>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#7E35E1]"></div>
              <p className="text-[#64748B] text-[14px]">Text</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#244D3F]"></div>
              <p className="text-[#64748B] text-[14px]">Call</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#37A163]"></div>
              <p className="text-[#64748B] text-[14px]">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
