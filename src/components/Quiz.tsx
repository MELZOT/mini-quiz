import { useState } from "react";
import type { Question } from "../types";
import Button from "./Button";
import OptionList from "./OptionList.tsx";

type QuizProps = {
    questions: Question[];
};

const Quiz = ({ questions }: QuizProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [score, setScore] = useState(0);


    const nextQuestion = () => {
        if (selectedIndex === questions[currentIndex].correctIndex) {
            setScore(score + 1);
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedIndex(null);
        }
    };


    return (
        <div className="bg-rose-50 border border-rose-200 shadow rounded-xl p-6 text-center space-y-4">
            {/* Ερώτηση */}
            <p className="text-lg font-semibold text-gray-700">
                {questions[currentIndex].text}
            </p>

            {/* Επιλογές */}
            <OptionList
                options={questions[currentIndex].options}
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
            />

            {/* Progress */}
            <p className="text-sm text-gray-500">
                Ερώτηση {currentIndex + 1} από {questions.length}
            </p>
            <p className="text-sm text-gray-600">
                Score: {score}
            </p>


            {/* Next button */}
            <Button
                label="Next"
                onClick={nextQuestion}
                disabled={selectedIndex === null}
            />
        </div>
    );
};

export default Quiz;
