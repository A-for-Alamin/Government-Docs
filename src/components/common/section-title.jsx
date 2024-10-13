import { cn } from "../../lib/utilities";
import { GradientText } from "./gradient-text";

export const SectionTitle = ({children, className, gradient}) => {
    return (
        <h1 className={cn("text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px] font-space-grotesk font-bold", className)}>{ children }<GradientText>{gradient}</GradientText></h1>
    )
}