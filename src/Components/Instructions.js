import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlay } from "react-icons/fi"; // Using icons for better UX

// Data for instructions - easier to manage and update
const instructionsData = {
  examFormat: {
    title: "Exam Format:",
    points: [
      "The comprehensive exam consists of 100 multiple-choice questions (MCQs).",
      "Each question has four options, out of which only one is correct.",
      <>The exam duration is <strong>2 hours.</strong></>, // Use <strong> for semantic importance
    ],
  }
};

const gradingData = [
  { grade: "S", condition: "Marks >= 90" },
  { grade: "A", condition: "Marks >= 80 & < 90" },
  { grade: "B", condition: "Marks >= 70 & < 80" },
  { grade: "C", condition: "Marks >= 60 & < 70" },
  { grade: "D", condition: "Marks >= 50 & < 60" },
  { grade: "F", condition: "Marks < 50" },
];

// Reusable component for an instruction section
const InstructionSection = ({ title, points = [] }) => (
  <section>
    <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
    <ul className="mt-2 ml-4 list-disc space-y-1 text-gray-700">
      {points.map((point, index) => (
        <li key={index}>
          {typeof point === "object" && (point.subPoints || point.text) ? (
            <>
              {point.text}
              {point.subPoints && (
                <ul className="mt-1 ml-6 list-disc space-y-1">
                  {point.subPoints.map((sub, subIndex) => <li key={subIndex}>{sub}</li>)}
                </ul>
              )}
            </>
          ) : (
            point
          )}
        </li>
      ))}
    </ul>
  </section>
);

// Reusable component for the grading table
const GradingTable = ({ data }) => (
  <section>
    <h3 className="mt-4 text-xl font-semibold text-gray-800">Grading System:</h3>
    <div className="mt-2 overflow-x-auto">
      <table className="w-full text-center border-collapse">
        <thead>
          <tr>
            {data.map(({ grade }) => (
              <th key={grade} className="border border-gray-300 bg-gray-100 px-4 py-2 font-bold text-gray-600">
                {grade}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map(({ grade, condition }) => (
              <td key={grade} className="border border-gray-300 px-2 py-2 text-sm text-gray-700">
                {condition}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);


const EnhancedInstructions = () => {
  return (
    // PARENT CONTAINER: Sets up the flex column layout for the entire screen height.
    <div className="flex min-h-screen w-full flex-col bg-[#FCFAEE]">

      {/* MAIN CONTENT: 'flex-grow' is the key. It makes this section expand to fill all available space. */}
      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md sm:p-8">
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Comprehensive Exam Instructions
          </h1>
          <div className="mt-8 space-y-6">
            <InstructionSection {...instructionsData.examFormat} />
            <GradingTable data={gradingData} />
            <div className="mt-6 flex justify-center">
              <Link to="/quiz">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <FiPlay />
                  <span>Start Quiz</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnhancedInstructions;