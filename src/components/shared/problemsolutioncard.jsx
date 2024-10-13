
export const ProblemSolutionCard = ({image, title, des1, des2}) => {
    return(
        <div className="w-[272px] h-[350px] bg-white rounded-[20px] p-4 space-y-5 shadow-card hover:bg-primary transition-colors duration-200 group">
            <img src={image} alt={title} />
            
            <h2 className="font-bold text-lg text-secondary leading-none group">{title}</h2>

            <p>{des1}</p>

            {des2 && <p>{des2}</p>}
        </div>
    )
}