import Button from "./Button";
import Container from "./Container";

function Hero () {
    return <div id="hero">
        <Container>
            <h1 className="title">We’ve got your morning covered with 
                <span>Coffee</span>
            </h1>
            <p>It is best to start your day with a cup of coffee. Discover the
best flavours coffee you will ever have. We provide the best
for our customers.</p>
            <Button href="#">Order Now</Button>
        </Container>
    </div>
}

export default Hero;