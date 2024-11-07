import { menus } from "../constants/constants";
import { motion} from "framer-motion";
import Button from "./Button";
import CascadWrapper from "./CascadWrapper";

function Card({ img, title, coffee, milk, price }) {
    return <motion.div
        whileHover={{ scale: 1.1 }}
        className="card card-menu">
        <img src={img} alt={title} className="card-img" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <div className="ingredient">Coffee {coffee}% | Milk {milk}%</div>
            <div className="price">${price}</div>
        </div>
        <Button href="#">Order Now</Button>
    </motion.div>
}


function MenuCard() {

    return <CascadWrapper
        className="card-group"
        items={menus}
        Component={Card}
    >
    </CascadWrapper>

}

export default MenuCard;