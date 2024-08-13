type TitleProps = {
    title: string;
};

const Title = ({ title }: TitleProps) => {
    return (
        <header className="w-full text-center bg-zinc-400 text-white font-bold h-10 text-lg pt-2">
            {title}
        </header>
    );
};

export default Title;
