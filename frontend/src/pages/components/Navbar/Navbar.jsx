import React, {useState} from 'react'
import "./navbar.css"

import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export const Navbar = () => {

    const [active, setActive] = useState('navBar') ;

    // function to toggle navBar
    const showNav = ()=> {
        setActive('navBar activeNavbar');
    }

    // function to remove navBar
    const removeNavbar = ()=> {
        setActive('navBar');
    }


  return (
    <section className='navBarSection' >
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1> <MdTravelExplore className='icon' /> Travel</h1>
                </a>
            </div>

            <div className={active}>
                <ul className='navList flex'>

                   

                    <li className='navItem'>
                        <a href='#' className='navLink'>Packages</a>
                    </li>

                    

                    <li className='navItem'>
                        <a href='#' className='navLink'>About</a>
                    </li>

                    

                    

                   

                    <button className='btn'>
                        <a href="#">BOOK NOW</a>
                    </button>

                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>

            </div>

            <div onClick={showNav} className="toggleNavbar">
                    < TbGridDots className='icon' />
            </div>

        </header>
    </section>
  )
}

export default Navbar;