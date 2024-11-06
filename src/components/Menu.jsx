import MenuCard from "./MenuCard";
import Section from "./Section";
import blastEnd from "../assets/coffee_blast_end.png";
function Menu () {
    
    return <Section id="menu" title="Enjoy a new blend of coffee style" desc="Explore all flavours of coffee with us. There is always a new cup worth experiencing">
    <MenuCard />
    <img className="blast blast-end" src={blastEnd} alt="coffee_blast" />
</Section>
}

export default Menu;