import "./Contact.css";
import Footer from "./Footer";

function Contact () {
    return (
        <div id="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <h3>Ahmed Amir Azouzi</h3>
                    <p>ahmedamirazouzi@gmail.com</p>
                    <p>Ben Arous, Tunisia,</p>
                    <p>+216 58 289 199</p>
                </div>

                <div className="contact-form">
                    <form id="contact-form">
                        <h3>Tell me what's on your mind ...</h3>
                        <input type="email" name="user_email" placeholder="email" required/>
                        <input type="text" name="user_subject" placeholder="subject" required/>
                        <textarea name="message" placeholder="content" required></textarea>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Contact;