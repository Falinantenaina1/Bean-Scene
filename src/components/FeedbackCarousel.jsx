import Slider from "react-slick";
import { feedback } from "../constants/constants";
import FeedbackCard from "./FeedBackCard";

const FeedbackCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div>
      <Slider {...settings}>
        {feedback.map(item => {
          return <FeedbackCard key={item.id} author={item.author} job={item.job} profil={item.profil} >
              {item.text}
            </FeedbackCard>
        })}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;