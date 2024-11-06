import Button from "./Button";
import DifferenciesCard from "./DifferenciesCard";
import Section from "./Section";

function Differencies() {

    return <Section id="differencies" title="Why are we different?" desc="We don’t just make your coffee, we make your day!">
        <DifferenciesCard />
        <div className="get-started">
            <p>Great ideas start with great coffee, Lets help you achieve that</p>
            <p className="call">Get started today.</p>
            <Button href="#">Join Us</Button>
        </div>
    </Section>
}

export default Differencies;