import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <>
    <footer className="footer-distributed">

<div className="footer-left">

    <h3>{props.firstHeading}<span>{props.lastHeading}</span></h3>

<ul className="footer-links">
    <li><Link className='footer-links-text' to="/">Home</Link></li>
    <li><Link className='footer-links-text' to="/soil">Soil</Link></li>
    <li><Link className='footer-links-text' to="/air">Air</Link></li>
    <li><Link className='footer-links-text' to="/water">Water</Link></li>
    <li><Link className='footer-links-text' to="/noise">Food</Link></li>
    <li><Link className='footer-links-text' to="/signup">Sign Up</Link></li>
</ul>

    <p className="footer-company-name">earthpollution&copy; 2019</p>
</div>

<div className="footer-center">

    <div>
    <i class="fa-solid fa-location-dot"></i>
        <p><span>{props.firstLocation}</span>{props.lastLocation}</p>
    </div>

    <div>
    <i class="fa-solid fa-phone"></i>
        <p>{props.contact}</p>
    </div>

    <div>
    <i class="fa-regular fa-envelope"></i>
        <p><a href="mailto:support@company.com">{props.email}</a></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>About the company</span>
        Web Tush Dev is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
    </p>

    <div className="footer-icons">

        <Link to="#"><i class="fa-brands fa-instagram"></i></Link>
        <Link to="#"><i class="fa-brands fa-facebook"></i></Link>
        <Link to="#"><i class="fa-brands fa-whatsapp"></i></Link>
        <Link to="#"><i class="fa-brands fa-github"></i></Link>

    </div>

</div>

</footer>


    </>
  )
}

export default Footer
