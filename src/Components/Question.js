import React from "react";

const Question = (props) => {
  const { data, onSelect, selected, showResult } = props;
  return (
    <div className="border-2 rounded-lg w-5/5 border-[#1E3E62] my-2 flex flex-col select-none">
      <div className="ml-2 mt-2">
        <h1>
          <b>Question: </b> {data.question}
        </h1>
        {data.options.map((option, index) => {
          let optionClass = "";
          if (showResult) {
            optionClass =
              option === data.answer
                ? "bg-green-300"
                : selected === option
                ? "bg-red-300"
                : "";
          } else if (selected === option) {
            optionClass = "bg-blue-200";
          }
          return (
            <h4
              className={`border-l-4 border-[#006BFF] m-2 cursor-pointer p-2 rounded ${optionClass}`}
              key={index}
              onClick={() => !showResult && onSelect(option)}
            >
              {option}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
