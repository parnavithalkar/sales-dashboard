"use client";

import { useState } from "react";
import DashboardLayout from "@/components/organisms/DashboardLayout";
import SalesChart from "@/components/organisms/SalesChart";
import FilterInput from "@/components/molecules/FilterInput";
import SalesCard from "@/components/molecules/SalesCard";
import ChartToggle from "@/components/molecules/ChartToggle";
import { salesData } from "@/data/salesData";

export default function DashboardPage() {
  const [minSales, setMinSales] = useState(0);
  const [chartType, setChartType] = useState("line");

  const filteredData = salesData.filter(
    (item) => item.value >= minSales
  );

  return (
    <DashboardLayout>
      <FilterInput value={minSales} onChange={setMinSales} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <SalesCard
            key={item.year}
            year={item.year}
            value={item.value}
          />
        ))}
      </div>

      <ChartToggle type={chartType} setType={setChartType} />

      <SalesChart data={filteredData} type={chartType} />
    </DashboardLayout>
  );
}
