import React, {useState} from 'react'
import { PiWebhooksLogoFill } from "react-icons/pi";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import "./Navbar.css";
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {

  const [showSideBar, setShowSideBar] = useState(false)


  return (
    <nav className="navbar__container">

      {
        showSideBar ? (
          <div className='overlay' onClick={()=> setShowSideBar(!showSideBar)}></div>
        ): ""
      }
      


      <div className="logo__container">
        <PiWebhooksLogoFill />
      </div>
      <div className={`tab__group ${showSideBar ? 'show': ''}`}>
        <span className='icon__container close__btn' onClick={()=> setShowSideBar(!showSideBar)}>
          <FaTimes/>
        </span>

        {
        menu.map((list, index) => (
          <Link
            activeClass="active"
            className="tab__item name"
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className="nav__buttons__group">
        <button className="btn btn__primary">
          Hire Me <FaArrowUpRightFromSquare />
        </button>
        <FaBarsStaggered className="menu" onClick={()=> setShowSideBar(!showSideBar)} />
      </div>
    </nav>
  )
}

export default Navbar