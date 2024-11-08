import Button from "./Button";
import Section from "./Section";
import CupStart from "../assets/cup-start.png";
import CupEnd from "../assets/cup-end.png";
function Suscribe() {
    return <Section
        id="suscribe"
        title="Subscribe to get the Latest News"
        desc="Don’t miss out on our latest news, updates, tips and special offers"
    >
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter your mail" />
            <Button>Suscribe</Button>
        </div>
        <img src={CupStart} alt="cup start" className="cup-blast cup-start" />
        <img src={CupEnd} alt="cup end" className="cup-blast cup-end" />
    </Section>
}

export default Suscribe;