import Container from "./Container";

function Section ({id="", title=null, desc=null, children}) {
    return <section id={id} className="section">
        <Container>
            {title && <h2 className="section-title">{title}</h2>}
            {desc && <p className="section-description">{desc}</p>}
            {children}
        </Container>
    </section>
}

export default Section;