import Hero from "./Hero";
import Navbar from "./Navbar";

function Header () {
    return <header className="header" id="header">
        <Navbar />
        <Hero />
    </header>
}

export default Header;