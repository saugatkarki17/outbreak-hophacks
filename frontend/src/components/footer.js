import '../App.css';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {  FaEnvelope, FaPhone, FaFacebook, FaLinkedin } from 'react-icons/fa';

function footer() {
  return (
    <div className="footer-div">

      <div className='footer-about'>
        <div className='logoDiv-footer'></div>
        <div className='logoDiv-footer-about'>Welcome to our real-time disease monitoring and trend prediction platform. Our mission is to provide accurate and up-to-date information on disease outbreaks across the globe, helping individuals, healthcare
             providers, and decision-makers stay informed and prepared.</div>
      </div>

      <div className='menu-footer'>


        <p className='link' id='quick-links'>Quick Links</p>
        <p className='link' id='quick-links-f'>Diseases &nbsp;<FaChevronDown/></p>
        <p className='link' id='quick-links-f'>About Data</p>
        <p className='link' id='quick-links-f'>News</p>
        <p className='link' id='quick-links-f'>About us</p>

      </div>
      <div className='menu-footer'>


        <p className='link' id='quick-links'>Our Approach</p>
        <p className='link' id='quick-links-f'>Data</p>
        <p className='link' id='quick-links-f'>Collabration</p>
        <p className='link' id='quick-links-f'>API</p>

        <p className='link' id='quick-links-f'>Contact Us</p>

      </div>

      <div className='contact-div'>
      <p className='link' id='quick-links'>Contact</p>
      <p className='link' id='quick-links-f'><FaEnvelope/>&nbsp;&nbsp;Outspread@gmail.com</p>
        <p className='link' id='quick-links-f'><FaPhone/>&nbsp; &nbsp;+1 (973) 123 1234, +1 (973) 123 1234</p>
        <p className='link' id='quick-links-f'><FaFacebook/>&nbsp;&nbsp;Facebook</p>
        <p className='link' id='quick-links-f'><FaLinkedin/>&nbsp;&nbsp;LinkedIn</p>
      </div>

      
    </div>

  );
}

export default footer;
