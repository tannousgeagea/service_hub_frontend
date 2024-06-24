import React from 'react';
import './footer.css'
import faGithub from '../../assets/icons/github.png';
import faLinkedin from '../../assets/icons/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-container-section ">
                <span className='author-name'>© 2024 Tannous Geagea</span>
                <div className="social-icons">
                    <a href="https://github.com/tannousgeagea" target="_blank" rel="noopener noreferrer">
                        <img src={faGithub} alt="Button icon"/>
                    </a>
                    <a href="https://linkedin.com/in/tannousgeagea" target="_blank" rel="noopener noreferrer">
                        <img src={faLinkedin} alt="Button icon"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;