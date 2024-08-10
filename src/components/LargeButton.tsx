
type LargeButtonProps = {
    onClick: () => void;
    label: string;
};

const LargeButton = ({ onClick, label }: LargeButtonProps) => {
    return (
        <button
            className="w-80 border-2 border-neutral-400 bg-red-50 text-black"
            onClick={onClick}
        >
            {label}
        </button>);
};

export default LargeButton;
