import { useState } from "react";
import type { Question } from "../types";

type QuizProps = {
    questions: Question[];
};

const Quiz = ({ questions }: QuizProps) => {
    // ποια ερώτηση εμφανίζεται
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextQuestion = () => {
        // πάμε στην επόμενη ερώτηση
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="bg-rose-50 border border-rose-200 shadow rounded-xl p-6 text-center space-y-4">
            <p className="text-lg font-semibold text-gray-700">
                {questions[currentIndex].text}
            </p>

            <p className="text-sm text-gray-500">
                Ερώτηση {currentIndex + 1} από {questions.length}
            </p>

            <button
                onClick={nextQuestion}
                className="px-5 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition"
            >
                Next
            </button>
        </div>
    );
};

export default Quiz;
