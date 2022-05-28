import { useEffect } from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
  ArcElement,
} from "chart.js";

function ChartPolar({ data }) {
  ChartJS.register(
    CategoryScale,
    LineController,
    PointElement,
    LineElement,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <PolarArea data={data} width={400} height={400} />
      </div>
    </>
  );
}

export default ChartPolar;
