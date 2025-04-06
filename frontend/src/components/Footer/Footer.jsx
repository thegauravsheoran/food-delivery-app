import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt='logo' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt=' ' />
                        <img src={assets.twitter_icon} alt='' />
                        <img src={assets.linkedin_icon} alt='' />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-1234557890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-bottom'>&copy; 2025 Food Delivery App. All Rights Reserved.</p>

        </div>
    )
}

export default Footer
