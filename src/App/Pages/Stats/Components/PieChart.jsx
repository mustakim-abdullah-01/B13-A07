import { Pie, PieChart, Cell, Tooltip } from "recharts";

// #region Sample data
const data = [
  { name: "Text", value: 400 },
  { name: "Call", value: 300 },
  { name: "Video", value: 300 },
];

// #endregion
export default function PieChartWithPaddingAngle() {
  const isAnimationActive = true;

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
