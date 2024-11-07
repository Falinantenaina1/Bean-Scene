import Button from "./Button";
import DifferenciesCard from "./DifferenciesCard";
import Section from "./Section";
import blastStart from "../assets/coffee_blast_start.png";

function Differencies() {

    return <Section id="about" title="Why are we different?" desc="We don’t just make your coffee, we make your day!">
        <DifferenciesCard />
        <div className="get-started">
            <p>Great ideas start with great coffee, Lets help you achieve that</p>
            <p className="call">Get started today.</p>
            <Button href="#">Join Us</Button>
        </div>
        <img className="blast blast-start" src={blastStart} alt="coffee_blast" />
    </Section>
}

export default Differencies;