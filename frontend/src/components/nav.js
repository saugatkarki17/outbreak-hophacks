import '../App.css';
import React from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa'; // Import icons from React Icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navigation() { // Component names should start with an uppercase letter
  return (
    <div className="nav">
      <div className='logoDiv'></div>

      <div className='menu'>
       <Link to="" className='link'>Home</Link> 
        <p className='link'>Diseases &nbsp;<FaChevronDown/></p>
        <Link to="/chart" className='link'>Prediction</Link> 
        <p className='link'>News</p>
        <Link to="/about" className='link'>About Us</Link> 
      </div>

      <div className='search'>
        <FaSearch fill='#757FB2' />
        <p className='search-icon'>Search..</p>
      </div>
    </div>
  );
}

export default Navigation;


