import SectionWithImage from "./SectionWithImage";
import coffeePuzzle from "../assets/coffee_puzzle.png";
import AnimatedWrapper from "./AnimatedWrapper";

function Discover () {

    return <AnimatedWrapper>
        <SectionWithImage
        id="discover"
        title="Discover the best coffee"
        linkText="Learn More"
        img={coffeePuzzle}
        >
        Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
    </SectionWithImage>
    </AnimatedWrapper>
}

export default Discover;