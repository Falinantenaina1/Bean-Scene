import logo from "../assets/logo.png";
import Container from "./Container"
import FacebookIcon from "../assets/facebook_icon.svg";
import InstagramIcon from "../assets/instagram_icon.svg";
import YoutubeIcon from "../assets/youtube_icon.svg";
import TwitterIcon from "../assets/twitter_icon.svg";
import AnimatedWrapper from "./AnimatedWrapper";

function Footer() {

    return <footer id="footer">
        <Container>
            <AnimatedWrapper>
            <div id="contact" className="footer">
                <div className="info">
                    <a href="#" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="social">
                        <a href="#" target="_blank">
                            <img src={FacebookIcon} alt="facebook" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={InstagramIcon} alt="instagram" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={YoutubeIcon} alt="youtube" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={TwitterIcon} alt="x" />
                        </a>
                    </div>
                </div>
                <div className="contact">
                    <h2 className="contact-title">Contact Us</h2>
                    <div className="contact-info">
                        <a href="#" target="_blank">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</a>
                        <a href="#" target="_blank">+1 202-918-2132</a>
                        <a href="#" target="_blank">beanscene@mail.com</a>
                        <a href="#" target="_blank">www.beanscene.com</a>
                    </div>
                </div>
            </div>
            </AnimatedWrapper>
        </Container>
    </footer>
}

export default Footer;