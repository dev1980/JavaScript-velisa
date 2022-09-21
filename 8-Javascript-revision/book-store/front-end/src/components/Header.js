import React from 'react'
import {Link} from 'react-router-dom';
import {FaBook} from 'react-icons/fa'
const Header = () => {
  return (
    <>
    <header className='navbar'>
    <div className='header__nav wrapper'>

        <h1><Link to="/"><FaBook /></Link></h1>
        <ul>
            <li><Link to="/add">Add Book</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/about">About Me</Link></li>
        </ul>
    </div>
    </header>
    </>
  )
}

export default Header