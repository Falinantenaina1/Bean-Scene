import { motion, useInView  } from "framer-motion"; 
import { useRef } from "react";


const AnimatedWrapper = ({children}) => {

    const ref = useRef(null);
    
    const isInView = useInView(ref, {once: true, margin: "-100px"})

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedWrapper;