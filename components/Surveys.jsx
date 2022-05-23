import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";

import SurveyQuestionList from "@/components/SurveyQuestions/SurveyQuestionList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Surveys({ results, setResults }) {
  const [questions, setQuestions] = useState({});
  // const [categories, setCategories] = useState(initialState);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showSurveyQuestions, setShowSurveyQuestions] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  function responseQuestion(id, value, isLastQuestion = false) {
    const newQuestions = Object.assign({}, questions);

    const updatedQuestions = newQuestions?.questions.map((question) => {
      if (question.id === id + 1) {
        question.disable = false;
      }
      return question;
    });

    newQuestions.questions = updatedQuestions;

    setQuestions(newQuestions);
    setSelectedIndex(id);
    setQuestionValue(id, value);

    if (isLastQuestion) {
      alert("Last question");
      // TODO: Send responses to Back
    }
  }

  function setQuestionValue(id, value) {
    const questionResult = results.find((result) => {
      if (result.id === id) {
        result.value = value;
        return result;
      }
    });

    if (!questionResult) {
      setResults([...results, { id, value }]);
      return;
    } else {
      const questionResultIndex = results.findIndex(
        (findResult) => findResult == questionResult
      );
      const newResults = results.slice(0);
      newResults[questionResultIndex] = questionResult;
      setResults(newResults);
    }
  }

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("/Questions.json");
      const data = await response.json();
      setQuestions(data);
    }

    fetchQuestions();
  }, []);

  useEffect(() => {
    questions?.questions && setShowSurveyQuestions(true);
  }, [questions]);

  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-16 sm:px-0">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex flex-wrap sm:flex-nowrap space-x-1 rounded-xl bg-primary-700 p-1">
          {showSurveyQuestions &&
            questions?.questions.map((question) => (
              <Tab
                key={question.id}
                disabled={question.disable}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {question.title}
              </Tab>
            ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {showSurveyQuestions &&
            questions?.questions.map((question, index) => (
              <Tab.Panel
                key={question.id}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <h2>{question.title}</h2>
                {showSurveyQuestions && (
                  <SurveyQuestionList
                    question={question}
                    selected={selected}
                    setSelected={setSelected}
                  />
                )}

                {index != questions.questions.length - 1 ? (
                  <button
                    className="block py-2 px-3 rounded bg-primary-400 text-white"
                    onClick={() => responseQuestion(question?.id, selected)}
                  >
                    Siguiente
                  </button>
                ) : (
                  <button
                    className="block py-2 px-3 rounded bg-primary-400 text-white"
                    onClick={() =>
                      responseQuestion(question?.id, selected, true)
                    }
                  >
                    Finalizar
                  </button>
                )}
              </Tab.Panel>
            ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
