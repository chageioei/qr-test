import { CodeInfo } from "../types";

type CodeCardProps = {
    code: CodeInfo;
    onDelete?: (id: number) => void;
};

const CodeCard = ({ code, onDelete }: CodeCardProps) => {
    const clickHandler = () => {
        onDelete && onDelete(code.id)
    }

    return (
        <div className="border-b-2 border-slate-200 flex flex-row items-center min-h-12 p-1">
            <div className="flex-1 break-all">
                {code.code}
            </div>
            <div className="w-6"><div className="p-1 text-slate-400 text-bold text-3xl" onClick={clickHandler}>×</div></div>
        </div>
    );
};

export default CodeCard;
