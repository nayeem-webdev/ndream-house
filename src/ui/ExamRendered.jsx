import React from "react";

const ExamRendered = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-700 leading-relaxed">{data.passage}</p>

      {data.questionGroups.map((group) => (
        <div key={group.range} className="space-y-4">
          <h2 className="font-semibold text-lg">
            {group.range}. {group.instruction}
          </h2>

          {group.questions.map((q) => (
            <div key={q.number} className="p-4 border rounded-lg space-y-2">
              <p className="font-medium">
                {q.number}. {q.question}
              </p>

              {group.type === "mcq" && (
                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`q-${q.number}`}
                        className="accent-blue-600"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              )}

              {group.type === "fill_blank" && (
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your answer"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExamRendered;
