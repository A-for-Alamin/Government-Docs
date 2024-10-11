import { useState } from "react";
import { Button } from "../common/button";
import { Container } from "../common/container";
import { Logo } from "./logo";
import { navItems } from "../../lib/db/index";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);

    const handleNavbar = () => {
        setNavOpen(!navOpen);
    }

    return (
        <nav className="px-[30x] py-5">
            <Container>
                <div className="flex justify-between items-center px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full gap-2.5">
                    <Logo>GoverningDocs</Logo>
                    
                    <ul className={`hidden md:flex items-center gap-0 md:gap-3 xl:gap-4 ${navOpen ? "openNav": ""}`}>
                        {navOpen ? <FaTimes onClick={handleNavbar} className="text-lg me-5 mb-5 self-end"/> : ""}
                        
                        {navItems.map(({label, link}, i) => (
                            <li key={i} className={`text-center text-accent text-base hover:text-primary transition-colors duration-150 cursor-pointer ${navOpen ? "w-full py-3 border border-b-secondary ": ""}`}><a href={link}>{label}</a></li>
                        ))}
                    </ul>
                    
                    <div className="flex items-center gap-2">
                        <Button>Get Started Today</Button>
                        <FaBars className="md:hidden mx-1 text-lg" onClick={handleNavbar}/>
                    </div>
                </div>
            </Container>
        </nav>
    )
}


