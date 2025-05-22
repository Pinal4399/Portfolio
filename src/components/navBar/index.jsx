import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from 'react-icons/hi';
import { SiPrecommit } from "react-icons/si";
import { Link } from 'react-router-dom';
import './styles.scss';
const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
        //    setToggleIcon(false)
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">

                        <SiPrecommit size={30} />


                    </Link>
                </div>
                <ul
                    className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}
<<<<<<< HEAD
                     onClick={handleToggleIcon}
=======
                    onClick={handleToggleIcon}
>>>>>>> b837212 (chnage in conatct form)
                >
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to}>
                                    {item.label}
                                </Link>

                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    );

}

export default Navbar;
