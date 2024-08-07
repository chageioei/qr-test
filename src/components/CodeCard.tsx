type CodeCardProps = {
    code: string;
};

const CodeCard = ({ code }: CodeCardProps) => {
    return <div className="border-b-2 border-slate-200 p-1">{code}</div>;
};

export default CodeCard;
