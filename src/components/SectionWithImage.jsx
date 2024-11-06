import Button from "./Button";

function SectionWithImage ({id, title, link="#", linkText, img, children}) {

    return <section id={id} className="section-with-image">
        <div className="flex">
        <div className="flex-text">
            <h2 className="section-title">{title}</h2>
            <p>{children}</p>
            <Button href={link}>{linkText}</Button>
        </div>
        <img src={img} alt="" className="flex-img" />
    </div>
    </section>
}

export default SectionWithImage;