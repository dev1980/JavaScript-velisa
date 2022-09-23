import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import {FaAlignJustify} from "react-icons/fa";

import '../style/Navbar.css';

const Navbar = () => {
const[expandNavbar, setExpandNavbar] = useState(false);
const location = useLocation();

useEffect(()=>{
setExpandNavbar(false)
}, [location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'><button onClick={()=> setExpandNavbar((prev) => !prev)}><FaAlignJustify /></button></div>


        <div className='links'>

        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>

        </div>
    </div>
  )
}

export default Navbar