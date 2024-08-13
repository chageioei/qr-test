import CodeCard from "./CodeCard";
import type { CodeInfo } from "../types";

type CodeListProps = {
    codes: CodeInfo[];
    onDelete?: (id: number) => void;
};

const CodeList = ({ codes, onDelete }: CodeListProps) => {
    return (
        <>
            {codes.map((code) => (
                <CodeCard code={code} key={code.id} onDelete={onDelete} />
            ))}
        </>
    );
};

export default CodeList;
