import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CascadWrapper({ className, items, Component }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true})

    return <div className={className} ref={ref}>
        {
            items.map((item, index) => {
                return <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.5,
                    }}
                >
                    <Component {...item}/>
                </motion.div>
            })
        }
    </div>
}

export default CascadWrapper;