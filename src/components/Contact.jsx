import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

   const address = [<p>Donostia-San Sebastian, Spain</p>];
   
   const email = [<a href="mailto:tbukits@vicomtech.org" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>tbukits@vicomtech.org</p>
   </a>];
   

   const linkedin = [<a href="https://linkedin.com/in/bukitst" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>LinkedIn</p>
   </a>];

   return(
      <div className='contact-div-main'>
            <div className='contact-grid'>
               <div className='contact-text'>
                  <div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLocationDot} />{address}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faEnvelope} />{email}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLinkedin} />{linkedin}
                     </div>
                  </div>
               </div>
               <div className="contact-grid-2">
                  <iframe
                     src="https://www.google.com/maps?q=Vicomtech,+Paseo+Mikeletegi+57,+20009+Donostia-San+Sebastian,+Spain&output=embed"
                     width="600"
                     height="450"
                     className="map-contact"
                     allowFullScreen
                     loading="lazy"
                     title="Vicomtech, Donostia–San Sebastián"
                     referrerPolicy="no-referrer-when-downgrade"
                  />
               </div>
            </div>
     </div>
   )
};
   
export default Contact;
