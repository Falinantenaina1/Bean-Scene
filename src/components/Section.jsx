import AnimatedWrapper from "./AnimatedWrapper";
import Container from "./Container";

function Section({ id = "", title = null, desc = null, children }) {
    return <section id={id} className="section">
        <Container>
            <AnimatedWrapper>
                {title && <h2 className="section-title">{title}</h2>}
                {desc && <p className="section-description">{desc}</p>}
            </AnimatedWrapper>
            {children}

        </Container>
    </section>
}

export default Section;