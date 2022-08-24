import "./Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
        <div id="footer">
            <div className="footer-left">
                <p>&copy;2022, all rights reserved.</p>
            </div>

            <div className="footer-right">
                <a href="https://github.com/ahmed-amir-azouzi" target="_blank"> <BsGithub/> </a>
                <a href="https://www.linkedin.com/in/ahmed-amir-azouzi/" target="_blank"> <BsLinkedin/> </a>
            </div>
        </div>
    );
}

export default Footer;