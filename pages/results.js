import ChartPolar from "@/components/ChartPolar";
import DefaultLayout from "layouts/DefaultLayout";
import { useState, useEffect } from "react";

export default function Results() {
  const [questions, setQuestions] = useState();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("/Questions.json");
      const { questions } = await response.json();
      setQuestions(questions);
    }

    fetchQuestions();
  }, []);

  useEffect(() => {
    const data = {
      labels: [
        "Pregunta 1",
        "Pregunta 2",
        "Pregunta 3",
        "Pregunta 4",
        "Pregunta 5",
      ],
      datasets: [
        {
          label: "Encuesta",
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
          ],
        },
      ],
    };

    setData(data);
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-center text-2xl text-primary-500 font-bold mt-7 mb-14">
        Resultados de las encuestas
      </h1>

      <ul className="mb-16 font-light space-y-4 max-w-4xl mx-auto">
        {questions &&
          questions.map((question) => {
            return (
              <li className="text-slate-500" key={question.id}>
                <span className="text-secondary-700 font-medium">{`${question.id}.-`}</span>
                {` ${question.title}`}
              </li>
            );
          })}
      </ul>

      {data?.datasets ? <ChartPolar data={data} /> : ""}
    </div>
  );
}

Results.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <div>{page}</div>
    </DefaultLayout>
  );
};
