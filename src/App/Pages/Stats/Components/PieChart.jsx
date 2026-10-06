import { useContext } from "react";
import { Pie, PieChart, Cell, Tooltip } from "recharts";
import { FriendContext } from "../../../../Context/Context";

// #region Sample data

// #endregion
export default function PieChartWithPaddingAngle() {
  const isAnimationActive = true;

  const Context = useContext(FriendContext);

  const { FriendLogObjectArray } = Context;

  const TextLogs = FriendLogObjectArray.filter((log) => log.action === "Text");
  const CallLogs = FriendLogObjectArray.filter((log) => log.action === "Call");
  const VideoLogs = FriendLogObjectArray.filter(
    (log) => log.action === "Video",
  );

  const textData = parseInt(TextLogs.length);
  const CallData = parseInt(CallLogs.length);
  const videoData = parseInt(VideoLogs.length);

  const data = [
    { name: "Text", value: textData },
    { name: "Call", value: CallData },
    { name: "Video", value: videoData },
  ];

  const COLORS = ["#244D3F", "#7E35E1", "#37A163"];
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "252px",
        maxHeight: "347px",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="5%"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
