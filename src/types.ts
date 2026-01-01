export type Question = {
    id: string;
    text: string;
    options: string[];
    correctIndex: number;
};

export type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

export type QuizListProps = {
    options: string[];
    selectedIndex: number | null;
    onSelect: (index: number) => void;
};