import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const CustomBarChart = ({ data }) => {
  // Function to alternate colors
  const getBarColor = (entry) => {
    switch (entry?.priority) {
      case 'Low':
        return '#008C7D'

      case 'Medium':
        return "#f39900"

      case 'High':
        return "#FF1F57"

      default:
        return '#008C70'
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-200">
          <p className="text-xs font-semibold text-purple-800 mb-1">
            {payload[0].payload.priority}
          </p>
          <p className="text-sm text-gray-600">
            Count:{' '}
            <span className="text-sm font-medium text-gray-900">
              {payload[0].payload.count}
            </span>
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className=" mt-6">
      <ResponsiveContainer width="90%" height={256}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="priority" tick={{ fontSize: 12, fill: "#D1D5DC" }} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: "#D1D5DC" }} stroke="none" />
          <Tooltip content={CustomTooltip} cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="count"
            nameKey="priority"
            fill="#FF8042"
            radius={[10, 10, 0, 0]}
            activeDot={{ r: 8, fill: "yellow" }}
            activeStyle={{ fill: "green" }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(entry)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarChart