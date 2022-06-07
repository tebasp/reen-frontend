import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";

function ChartDoughnut({ data }) {
  // ChartJS.register(
  //   CategoryScale,
  //   LineController,
  //   PointElement,
  //   LineElement,
  //   RadialLinearScale,
  //   ArcElement,
  //   Title,
  //   Tooltip,
  //   Legend,
  //   Filler
  // );

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <Doughnut data={data} width={400} height={400} />
      </div>
    </>
  );
}

export default ChartDoughnut;
