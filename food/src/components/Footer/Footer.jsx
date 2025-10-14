import React from 'react';
import "./footer.css";
import { assets } from '../../assets/assets';


const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
    <div className='footer-content-left'>
 <img  src={assets.logo} alt=''/>
 <p>© 2025 Hotel Paradise. All Rights Reserved.  
Experience comfort, luxury, and unforgettable
</p>
<div className='footer-social-icons'>
    <img src={assets.facebook_icon}/>
     <img src={assets.twitter_icon}/>
      <img src={assets.linkedin_icon}/>
</div>
    </div>
    
      <div className='footer-content-center'>
      <h2>company</h2>
      <ul>
        <li>home</li>
          <li>about-us</li>
            <li>delivery</li>
              <li>privacy-policy</li>
      </ul>

      </div>
       <div className='footer-content-right'>
       <h2>get in touch</h2>
       <ul>
        <li>+1-222-232-9292</li>
        <li>contact@hotel.com</li>
       </ul>

     </div>
    </div>
    <hr/>
    <p className='footer-copyright'>copyright 2025 -all right reserved </p>
    </div>
  );
}

export default Footer;
