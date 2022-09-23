import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import {MdOutlineMailOutline} from 'react-icons/md'
import '../style/Home.css';

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Brham Dev</h2>
        <p>A Front-End Developer with a passion for learning and experimenting with new technology</p>
      <FaLinkedinIn />
      <FaGithub />
      <FaTwitter />
      <MdOutlineMailOutline />
</div>


    </div>

    <div className='skills'>
      <div className='skills__wrapper '>
<h1>Skills</h1>
<ol className='list '>
    <li className='item'>
      <h2>Front-End</h2>
      <span>
        ReactJS, Redux, HTML, CSS, BootStrap, MaterailUI, SASS, StyledComponents NPM
      </span>
    </li>

    <li className='item'>
      <h2>Back-End</h2>
      <span>
       NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, SQL
      </span>
    </li>

    <li className='item'>
      <h2>Languages</h2>
      <span>
      JavaScript, Ruby
      </span>
    </li>
</ol>
</div>
</div>
</>
  )
}

export default Home