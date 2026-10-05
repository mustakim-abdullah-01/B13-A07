import { useContext, useState } from "react";
import { FriendContext } from "../../../Context/Context";
import NoLogs from "../../Components/NoLogs";
import LogCard from "./Components/LogCard";

const TimeLinePage = () => {
  const friendLogs = useContext(FriendContext);

  const { FriendLogObjectArray } = friendLogs;

  const [filter, setFilter] = useState("All");

  const filterdLogs =
    filter === "All"
      ? FriendLogObjectArray
      : FriendLogObjectArray.filter((log) => log.action === `${filter}`);

  return (
    <div className="container mx-auto">
      <h1 className="mb-6 text-5xl font-bold">Timeline page</h1>
      <div className="pb-6">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 shadow-lg shadow-primary/10 hover:shadow-primary/30 duration-1000 border border-[#64748B]/40 rounded-lg bg-white text-[#64748B] text-lg font-normal"
          >
            Filter timeline
          </div>
          <ul
            tabIndex={-1}
            className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52"
          >
            <li onClick={() => setFilter("Call")}>
              <a>Filter by Call</a>
            </li>
            <li onClick={() => setFilter("Text")}>
              <a>Filter by Text</a>
            </li>
            <li onClick={() => setFilter("Video")}>
              <a>Filter by Video Call</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {(filterdLogs.length === 0 && <NoLogs />) ||
          filterdLogs.map((log, idx) => <LogCard log={log} key={idx} />)}
      </div>
    </div>
  );
};

export default TimeLinePage;
