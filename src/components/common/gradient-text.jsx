import { cn } from "../../lib/utilities";

export const GradientText = ({children, className}) => {
    return (
        <span className={cn("bg-gradient-to-b from-[#00d2ff] to-[#059dbe] bg-clip-text text-transparent", className)}>{children}</span>
    )
}