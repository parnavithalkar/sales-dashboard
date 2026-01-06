"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Item = {
  year: string;
  value: number;
};

const COLORS = ["#3b82f6", "#22c55e", "#facc15"];

export default function SalesChart({
  data,
  type,
}: {
  data: Item[];
  type: string;
}) {
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur p-6 shadow border">
      <h3 className="mb-4 font-semibold text-slate-800">
        Sales Visualization
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <>
          {type === "line" && (
            <LineChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          )}

          {type === "bar" && (
            <BarChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22c55e" />
            </BarChart>
          )}

          {type === "pie" && (
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="year"
                outerRadius={120}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </>
      </ResponsiveContainer>
    </div>
  );
}
