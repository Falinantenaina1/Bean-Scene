import SectionWithImage from "./SectionWithImage";
import Cup from "../assets/cup.png";

function GetChance () {

    return <SectionWithImage
        id="get-chance"
        title="Get a chance to have an Amazing morning"
        linkText="Order Now"
        img={Cup}
    >
      We are giving you are one time opportunity to
      experience a better life with coffee.  
    </SectionWithImage>
}

export default GetChance;