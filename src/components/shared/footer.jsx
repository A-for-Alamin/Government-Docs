import { Container } from "../common/container";
import { navItems } from "../../lib/db/index";
import { Logo } from "./logo";

// Import icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="flex justify-between items-center flex-col sm:flex-row gap-2.5">
                    <Logo>AI GoverningDocs</Logo>

                    <ul className="hidden md:flex items-center gap-3 xl:gap-4">
                        {navItems.map(({label, link}, i) => (
                            <li key={i} className="text-accent text-base hover:text-primary transition-colors duration-150 cursor-pointer">
                                <a href={link}>{label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center items-center gap-2.5">
                        {socialIcon.map(({icon, url}, x) => (
                            <a key={x} href={url} className="text-base p-2 rounded-full text-primary bg-primary/25 hover:scale-110 transition-all duration-150">{icon}</a>
                            
                        ))}
                    </div>
                </div>

                <div className="mt-5 md:mt-[50px] lg:mt-[106px] border-t border-transparent footer-border-color">
                    <p className="text-sm sm:text-lg text-center text-[#111111] py-5 leading-[18px]">Ai GoverningDocs 2024. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    )
}


const socialIcon = [
    {
        icon: <FaFacebookF />,
        url: "#",
    },
    {
        icon: <FaInstagram />,
        url: "#",
    },
    {
        icon: <FaLinkedinIn />,
        url: "#",
    },
    {
        icon: <FaXTwitter />,
        url: "#",
    },
] 