import Button from "./Button";
import type { ResultScreenProps } from "../types";
import { Sparkles } from "lucide-react";



const ResultScreen = ({ score, total, onRestart }: ResultScreenProps) => {
    return (
        <div className="bg-rose-50 border border-rose-200 shadow rounded-xl p-6 text-center space-y-4">
            <Sparkles className="mx-auto text-[#edf03d]" size={40} />

            <h2 className="text-xl font-semibold text-gray-700">
                Τέλος Quiz
            </h2>

            <p className="text-gray-600">
                Τελικό σκορ: <strong>{score}</strong> / {total}
            </p>

            <Button label="Restart" onClick={onRestart} />
        </div>
    );
};

export default ResultScreen;
