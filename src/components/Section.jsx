import Container from "./Container";

function Section ({id, title, desc, children}) {
    return <section id={id} className="section">
        <Container>
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{desc}</p>
            {children}
        </Container>
    </section>
}

export default Section;