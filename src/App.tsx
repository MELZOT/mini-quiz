import Quiz from "./components/Quiz";
import type { Question } from "./types";

const QUESTIONS: Question[] = [
    {
        id: "q1",
        text: "Ποια είναι η πρωτεύουσα της Ελλάδας;",
        options: ["Θεσσαλονίκη", "Αθήνα", "Πάτρα"],
        correctIndex: 1,
    },
    {
        id: "q2",
        text: "Πόσα bits έχει 1 byte;",
        options: ["4", "8", "16"],
        correctIndex: 1,
    },
];

function App() {
    return (
        <div className="min-h-screen bg-purple-50/100 ">
            <div className="max-w-2xl mx-auto pt-10 px-4">
                <h1 className="text-center text-3xl font-bold mb-8 text-gray-800 leading-tight">
                    Mini Quiz
                </h1>
                <Quiz questions={QUESTIONS} />
            </div>
        </div>

    );
}

export default App;
