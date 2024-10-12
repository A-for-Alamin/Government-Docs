import { Button } from "../common/button"
import { Container } from "../common/container"

export const Hero = () => {
    return(
        <section className="pt-10 md:pt-20 lg:pt-28 xl:pt-[142px]">
            <Container className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-0">
                <div className="space-y-7">
                    <h1 className="font-space-grotesk font-bold text-2xl md:text-4xl lg:text-6xl md::leading-[60px] lg:leading-[76px] text-secondary max-w-[593px]">Simplify your real estate document analysis</h1>

                    <p className="font-semibold text-base md:text-lg lg:text-xl leading-7 text-secondary max-w-[519px]">Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>

                    <Button>Get Started Today</Button>
                </div>
                <div className="p-5 flex justify-center">
                    <img src="img/hero-side.svg" alt="Hero Image" className="w-[80%] md:w-full"/>
                </div>
            </Container>
        </section>
    )
} 