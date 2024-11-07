import Button from "./Button";
import { motion } from "framer-motion";

function SectionWithImage({ id, title, link = "#", linkText, img, children }) {

    return <section id={id} className="section-with-image">
        <div className="flex">
            <div className="flex-text">
                <h2 className="section-title">{title}</h2>
                <p>{children}</p>
                <Button href={link}>{linkText}</Button>
            </div>
            <motion.img
                src={img}
                alt=""
                className="flex-img"
                whileHover={{ rotateY: 360 }}
            />
        </div>
    </section>
}

export default SectionWithImage;