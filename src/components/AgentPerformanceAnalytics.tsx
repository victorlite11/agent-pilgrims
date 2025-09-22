import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AgentPerformanceAnalytics = ({ stats }: { stats: any }) => {
  const data = {
    labels: ["Registrations", "Approvals", "Revenue"],
    datasets: [
      {
        label: "Agent Performance",
        data: [stats.totalPilgrims, stats.approvals, stats.revenue],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e42"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Performance Analytics" },
    },
  };
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Performance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default AgentPerformanceAnalytics;
