import "./About.css";
import photo from "../assets/photo-profile.jpg";

function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={photo} alt="ahmed-amir-azouzi" />
            </div>

            <div className="about-content">
                <p>Entry-level, self-taught, front-end developer. Currently looking for new challenges and opportunities.</p>
                <p>Tech Stack: Javascript, ReactJS, JQuery, HTML, CSS, Bootstrap, Git, </p>
                <p>Check out my portfolio @ &nbsp; 
                    <a href="https://github.com/ahmed-amir-azouzi" target="_blank">
                         https://github.com/ahmed-amir-azouzi
                    </a>
                </p>
            </div>
        </div>
    );
}

export default About;