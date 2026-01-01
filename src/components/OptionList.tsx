import type { QuizListProps } from "../types";

const QuizList = ({ options, selectedIndex, onSelect }: QuizListProps) => {
    return (
        <div className="space-y-2">
            {options.map((option, index) => (
                <button
                    key={option}
                    onClick={() => onSelect(index)}
                    className={`block w-full px-4 py-2 border rounded-lg text-left
                      ${
                        selectedIndex === index
                            ? "bg-rose-200 border-rose-400"
                            : "bg-white hover:bg-rose-100"
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default QuizList;
