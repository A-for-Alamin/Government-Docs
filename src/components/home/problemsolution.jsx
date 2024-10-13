import { Container } from "../common/container";
import { GradientText } from "../common/gradient-text";
import { SectionTitle } from "../common/section-title";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { ProblemSolutionCard } from "../shared/problemsolutioncard";
import { ProbSolutionData } from "../../lib/db/index"



export const ProblemSolution = () => {
    return(
        <section className="pt-10 md:pt-16 lg:pt-25 xl:pt-32">
            <Container>
                <div className="flex justify-between items-center">
                    <SectionTitle gradient="Solution" className="">Problem & </SectionTitle>
                    <div className="flex justify-between gap-2.5">
                        <FaAngleLeft className="p-2.5 text-4xl text-primary rounded-full shadow-lg cursor-pointer"/>
                        <FaAngleRight className="p-2.5 text-4xl rounded-full cursor-pointer bg-gradient-to-r from-[#00d2ff] to-[#9aedff]"/>
                    </div>
                </div>

                <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-[30px]">
                    {ProbSolutionData.map(({image, title, des1, des2}, i) => (
                        console.log(image),
                        <ProblemSolutionCard key={i} image={image} title={title} des1={des1} des2={des2}/>
                    ))}
                </div>
            </Container>
        </section>
    )
}