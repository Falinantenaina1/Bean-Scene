import { menus } from "../constants/constants";
import Button from "./Button";
import CardGroup from "./cardGroup";

function Card ({img, title, coffee, milk, price}) {
    return <div className="card card-menu">
        <img src={img} alt={title} className="card-img" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <div className="ingredient">Coffee {coffee}% | Milk {milk}%</div>
            <div className="price">${price}</div>
        </div>
        <Button href="#">Order Now</Button>
    </div>
}


function MenuCard () {
    return <CardGroup>
        {menus.map(menu => {
            return <Card
                key = {menu.id}
                img = {menu.img}
                title = {menu.title}
                coffee = {menu.coffee}
                milk = {menu.milk}
                price = {menu.price}
            />
        })}
    </CardGroup>
}

export default MenuCard;