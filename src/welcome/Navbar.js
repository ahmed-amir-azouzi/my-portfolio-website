import "./Navbar.css";

function Navbar() {
    return (
        <div id="#navbar">
            <div className="navbar-elements">
                <ul>
                    <li><a href="#welcome">Welcome</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;