import { differencies } from "../constants/constants";
import CardGroup from "./cardGroup";

function Card ({img, title, text}) {
    return <div className="card card-differencies">
        <img src={img} alt={title} className="card-img" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    </div>
}

function DifferenciesCard () {

    return <CardGroup>
        {differencies.map(item => {
            return <Card key={item.id} img={item.img} title={item.title} text={item.text} />
        })}
    </CardGroup>
}

export default DifferenciesCard;