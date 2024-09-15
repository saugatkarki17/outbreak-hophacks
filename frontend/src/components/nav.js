import '../App.css';
import React from 'react';
import { FaSearch } from 'react-icons/fa'; 
// Importing search icon from React Icons
import { FaChevronDown } from 'react-icons/fa';

function navigation() {
  return (
    <div className="nav">
      <div className='logoDiv'></div>

      <div className='menu'>

        <p className='link'>Diseases <FaChevronDown/></p>
        <p className='link'>About Data</p>
        <p className='link'>News</p>
        <p className='link'>About us</p>

      </div>

      <div className='search'>
            <FaSearch fill='#757FB2' />
        <p className='search-icon'> Search..</p>
      </div>

      
    </div>

  );
}

export default navigation;
