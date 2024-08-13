import { Button } from "@radix-ui/themes";

type LargeButtonProps = {
    onClick?: () => void;
    label: string;
    color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky" | undefined;
    disabled?: boolean;
};

const LargeButton = ({
    onClick,
    label,
    color,
    disabled = false,
}: LargeButtonProps) => {
    return (
        <Button size="3" onClick={onClick} disabled={disabled} color={color} radius="large" className="w-48 font-bold">
            {label}
        </Button >
    );
};

export default LargeButton;
