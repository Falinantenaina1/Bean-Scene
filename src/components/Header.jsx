import AnimatedWrapper from "./AnimatedWrapper";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Header() {
    return <header className="header" id="header">
        <AnimatedWrapper>
            <Navbar />
            <Hero />
        </AnimatedWrapper>
    </header>
}

export default Header;