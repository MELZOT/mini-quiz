import type { Question } from "../types";

type QuizProps = {
    questions: Question[];
};

const Quiz = ({ questions }: QuizProps) => {
    return (
        <div className="bg-rose-50 border border-rose-200 shadow rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-gray-500 ">
                Quiz component is ready
            </p>

            <p className="text-green-900  mt-2">
                Αριθμός Ερωτήσεων: <strong>{questions.length}</strong>
            </p>
        </div>

    );
};

export default Quiz;

