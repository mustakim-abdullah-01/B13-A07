import { useContext } from "react";
import NoLogs from "../../Components/NoLogs";
import { FriendContext } from "../../../Context/Context";
import StatsPage from "./Components/StatsPage";

const Stats = () => {
  const Context = useContext(FriendContext);

  const { FriendLogObjectArray } = Context;

  return (
    <div className="container mx-auto">
      <h1 className="mb-12 text-5xl font-bold ">Friendship Analytics</h1>
      {FriendLogObjectArray.length === 0 ? <NoLogs /> : <StatsPage />};
    </div>
  );
};

export default Stats;
