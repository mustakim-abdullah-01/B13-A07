import PieChartComponent from "./Components/PieChart";

const StatsPage = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <h1 className="mb-6 text-5xl font-bold ">Friendship Analytics</h1>
        <div className="p-8 mb-20 border rounded-lg border-slate-300">
          <p className="text-[#244D3F] font-medium text-xl mb-6">
            By Interaction Type
          </p>
          <div className="flex items-center justify-center">
            <PieChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
