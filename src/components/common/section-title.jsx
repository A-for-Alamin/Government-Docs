import { cn } from "../../lib/utilities";
import { GradientText } from "./gradient-text";

export const SectionTitle = ({children, className, gradient}) => {
    return (
        <h1 className={cn("font-space-grotesk font-bold text-[46px]", className)}>{ children }<GradientText>{gradient}</GradientText></h1>
    )
}