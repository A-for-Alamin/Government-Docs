import { cn } from "../../lib/utilities";

export const Button = ({children, className}) => {
    return (
        <button className={cn("py-3 sm:py-4 px-3.5 sm:px-[25px] text-xs md:text-base font-bold rounded-full text-white bg-gradient-primary opacity-85 hover:opacity-100 transition-all delay-150", className)}>{children}</button>
    )
}