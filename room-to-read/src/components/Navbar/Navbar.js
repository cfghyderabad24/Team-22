import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../../assests/images/menu_icon.png'
import logos from '../../assests/images/logos.jpeg'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 70 ? setSticky(true) : setSticky(false)
        })
    });

    const toggleMenu = () => {
        menu ? setMenu(false) : setMenu(true);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logos} alt="" className="logo" />
            <ul className={menu ? '' : 'hide-menu'}>
                <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='show' smooth={true} offset={-260} duration={500}>Library</Link></li>
                <li>Login</li>
                <li><Link to='about' smooth={true} offset={-200} duration={500}>About Us</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
            <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar