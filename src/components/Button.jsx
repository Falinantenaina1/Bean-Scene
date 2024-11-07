import { motion } from "framer-motion";
function Button ({href, children}) {

    if (href) {
        return <motion.a 
        href={href} 
        className="btn"
        whileHover={{scale: 1.1}}
        >{children}</motion.a>
    }
    return <button className="btn">{children}</button>
}

export default Button;