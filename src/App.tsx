import Quiz from "./components/Quiz";
import type { Question } from "./types";

const QUESTIONS: Question[] = [
    {
        id: "q1",
        text: "Τι είναι το React;",
        options: [
            "Βιβλιοθήκη JavaScript για UI",
            "Γλώσσα προγραμματισμού",
            "Βάση δεδομένων",
        ],
        correctIndex: 0,
    },
    {
        id: "q2",
        text: "Τι είναι ένα component στο React;",
        options: [
            "Ένα CSS αρχείο",
            "Ένα επαναχρησιμοποιήσιμο κομμάτι UI",
            "Μια βάση δεδομένων",
        ],
        correctIndex: 1,
    },
    {
        id: "q3",
        text: "Ποιο αρχείο είναι συνήθως το αρχικό component μιας React εφαρμογής;",
        options: [
            "index.html",
            "App.tsx",
            "package.json",
        ],
        correctIndex: 1,
    },
    {
        id: "q4",
        text: "Τι είναι τα props στο React;",
        options: [
            "Σταθερές μεταβλητές",
            "Δεδομένα που περνάμε σε component",
            "CSS ιδιότητες",
        ],
        correctIndex: 1,
    },
    {
        id: "q5",
        text: "Τι κάνει το useState hook;",
        options: [
            "Δημιουργεί component",
            "Διαχειρίζεται state σε functional components",
            "Φορτώνει δεδομένα από API",
        ],
        correctIndex: 1,
    },
    {
        id: "q6",
        text: "Τι είναι το JSX;",
        options: [
            "Μια γλώσσα styling",
            "Σύνταξη που μοιάζει με HTML μέσα σε JavaScript",
            "Ένα αρχείο εικόνας",
        ],
        correctIndex: 1,
    },
    {
        id: "q7",
        text: "Πώς περνάμε δεδομένα από parent σε child component;",
        options: [
            "Με useState",
            "Με props",
            "Με CSS",
        ],
        correctIndex: 1,
    },
    {
        id: "q8",
        text: "Τι σημαίνει re-render σε ένα component;",
        options: [
            "Η εφαρμογή κλείνει",
            "Το component ξαναεμφανίζεται με νέα δεδομένα",
            "Το CSS αλλάζει χρώμα",
        ],
        correctIndex: 1,
    },
    {
        id: "q9",
        text: "Ποιο hook χρησιμοποιούμε για state στο React;",
        options: [
            "useFetch",
            "useState",
            "useClass",
        ],
        correctIndex: 1,
    },
    {
        id: "q10",
        text: "Γιατί σπάμε τον κώδικα σε components;",
        options: [
            "Για καλύτερη οργάνωση και επαναχρησιμοποίηση",
            "Για να γράφουμε περισσότερο κώδικα",
            "Για να δουλεύει μόνο το CSS",
        ],
        correctIndex: 0,
    },
];


function App() {
    return (
        <div className="min-h-screen bg-purple-50 ">
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
