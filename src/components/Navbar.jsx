import { useState } from "react";
import logo from "../assets/logo.png";
import { navigation } from "../constants/constants";
import Button from "./Button";
import Container from "./Container";

function Navbar() {

    const [isHidden, setIsHidden] = useState(true);

    const handleClick = () => {
        setIsHidden(!isHidden)
    }

    const hidden = isHidden ? "hidden" : ""

    return (
        <>

            <Container>
                <div className="topbar">
                    <a href="/index.html">
                        <img src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav className={`navbar ${hidden}`}>
                        {
                            navigation.map(item => {
                                return <a key={item.id} href={item.url}>{item.title}</a>
                            })
                        }
                    </nav>
                    <div className={`sign ${hidden}`}>
                        <a href="#">Sign In</a>
                        <Button href="#">Sign Up</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Navbar;