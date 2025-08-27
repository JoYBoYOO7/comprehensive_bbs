import React, { useState, useEffect } from "react";
import { quesList } from "../utils/quesList";
import Question from "./Question";
import { Link } from "react-router-dom";

const Quiz = () => {
  const shuffle = (arr) => {
    let a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const selected = shuffle(quesList).slice(0, 100).map(q => ({
      ...q,
      options: shuffle(q.options)
    }));
    setQuizQuestions(selected);
  }, []);

  const retakeQuiz = () => {
    const selected = shuffle(quesList).slice(0, 100).map(q => ({
      ...q,
      options: shuffle(q.options)
    }));
    setQuizQuestions(selected);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="w-full h-screen flex bg-[#FCFAEE] justify-center">
      <div
        className="border-2 rounded-lg w-3/5 h-5/6 border-[#1E3E62] my-1 flex flex-col overflow-y-auto p-2"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#FCFAEE,",
        }}
      >
        <div className="flex justify-center outline-dotted outline-2 p-2 mb-2">
          <Link to="/instructions">
            <button className="w-48 rounded-lg px-4 py-2 bg-yellow-500 text-black hover:bg-blue-600 hover:text-white duration-300 mx-4">
              Back to Instructions
            </button>
          </Link>
        </div>
        <div className="p-4 overflow-y-auto">
          {quizQuestions.map((question, index) => (
            <Question
              key={index}
              data={question}
              onSelect={(opt) => setAnswers({ ...answers, [index]: opt })}
              selected={answers[index]}
              showResult={submitted}
            />
          ))}
        </div>
        {!submitted && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                let sc = 0;
                quizQuestions.forEach((q, i) => {
                  if (answers[i] === q.answer) sc++;
                });
                setScore(sc);
                setSubmitted(true);
              }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit Quiz
            </button>
          </div>
        )}
        {submitted && (
          <div className="text-center mt-4">
            <div className="text-xl font-semibold mb-4">
              Your Score: {score} / 100
            </div>
            <button
              onClick={retakeQuiz}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: #f4ce14; /* Primary color for scrollbar thumb */
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background-color: #fcfaee; /* Accent color on hover */
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background-color: #024caa; /* Background for scrollbar track */
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Quiz;
