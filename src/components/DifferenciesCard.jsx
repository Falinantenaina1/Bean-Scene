import { differencies } from "../constants/constants";
import { motion } from "framer-motion";
import CascadWrapper from "./CascadWrapper";

function Card({ img, title, text }) {
    return <motion.div
        whileHover={{ scale: 1.1}}
        className="card card-differencies"
    >
        <img src={img} alt={title} className="card-img" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    </motion.div>
}

function DifferenciesCard() {

    return <CascadWrapper
        className="card-group"
        items={differencies}
        Component={Card}
    >
    </CascadWrapper>
}

export default DifferenciesCard;