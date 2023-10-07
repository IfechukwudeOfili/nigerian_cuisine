import Logo from "./Logo"

function Footer(){

    return(
        <footer className="footer">
            <div className="footerLogo">
                <Logo/>
            </div>
            <ul className="footerLinks">
                <li>About us</li>
                <li>Full Menu</li>
                <li>Catering Menu</li>
                <li>Chef's special Menu</li>
                <li>Testimonials</li>
                <li>Locations</li>
            </ul>
            <div className="socials">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            </div>
        </footer>
    )
}

export default Footer