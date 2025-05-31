import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer_links'>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className='footer_contact'>
                    <p>Contact Us: Reservebite@gmail.com</p>
                    <p>Phone: 8005601241</p>
                </div>
            </div>
        </>
    );
}

export default Footer;