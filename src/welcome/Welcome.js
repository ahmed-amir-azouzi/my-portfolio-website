import "./Welcome.css";
import Navbar from "./Navbar";
import resume from "../assets/Resume-Ahmed-Amir-Azouzi.pdf";

function Welcome () {
    return (
        <div id="welcome">
            <Navbar />

            <div className="welcome-container">
                <div className="welcome-content">
                    <h1>Hello,</h1>
                    <h1>My name is <span className="span-name">Ahmed Amir Azouzi,</span></h1>
                    <h1>and I am a Front-End Developer.</h1>
                </div>

                <div className="welcome-buttons">
                    <a href={resume} className="button-resume" download>Download Resume</a>
                    <a href="#contact"className="button-contact">Let's get in touch</a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;