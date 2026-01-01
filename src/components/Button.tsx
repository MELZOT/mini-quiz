import type { ButtonProps } from "../types";

const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="px-5 py-2 bg-rose-400 text-white rounded-lg
                       hover:bg-rose-500 transition
                       disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {label}
        </button>
    );
};

export default Button;