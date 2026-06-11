import React from "react";

const InlineFillPassage = ({ passage, questions, answers, setAnswers }) => {
  const parts = passage.split(/({blank\d+})/g);
  return (
    <p className="text-gray-700">
      {parts.map((part, idx) => {
        const match = part.match(/{(blank\d+)}/);
        if (match) {
          const qNumber = questions.find(
            (q) => q.placeholder === match[1],
          ).number;
          return (
            <input
              key={idx}
              type="text"
              value={answers[qNumber] || ""}
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, [qNumber]: e.target.value }))
              }
              className="inline border-b border-gray-400 mx-1 w-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          );
        }
        return part;
      })}
    </p>
  );
};

export default InlineFillPassage;
