import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import SignInForm from '../SignIn/SignInForm';
import './Navbar.css';


function Navbar() {

    const [selected, setIsSelected] = useState('')
    const [openModal1, setIsOpenModal1] = useState(false)

    const { isLoggedIn, setIsLoggedIn, logOutUser, authenticateUser, getStoredToken } = useContext(AuthContext);

    const handleHelpModal1 = () => {
        setIsOpenModal1(true)
    }
    const logOut = (e) => {

        logOutUser()
        setIsLoggedIn(false)
        console.log(isLoggedIn)
    }

    return (
        <div className="navB">
            <nav className='nav2'>
                <NavLink exact
                    to="/"
                    className={({ isActive }) => (isActive ? 'Individuals2' : 'Individuals')}
                ><b>Beacon v2 Cancer Registry Portal</b></NavLink>
                
                <div class="animation nav2"></div>
            </nav>
            <nav className='nav2'>
                <NavLink exact
                    to="/occurrences"
                    className={({ isActive }) => (isActive ? 'Occurrences2' : 'Occurrences')}
                ><b>Occurrences</b></NavLink>
                
                <div class="animation nav2"></div>
            </nav>
            <nav className='nav2'>
                <NavLink exact
                    to="/features"
                    className={({ isActive }) => (isActive ? 'Features2' : 'Features')}
                ><b>Features</b></NavLink>
                
                <div class="animation nav2"></div>
            </nav>

            <nav className='nav2'>
                <NavLink exact
                    to="/devices"
                    className={({ isActive }) => (isActive ? 'Devices2' : 'Devices')}
                ><b>Devices</b></NavLink>
                
                <div class="animation nav2"></div>
            </nav>
            <nav className='nav3'>
                {!isLoggedIn &&
                    <NavLink exact
                        to="/sign-in"
                        className={({ isActive }) => (isActive ? 'Sign-in2' : 'Sign-in')}
                    >Sign in</NavLink>}
                {isLoggedIn &&
                    <NavLink exact
                        to="/sign-in"
                        className={({ isActive }) => (isActive ? 'Sign-in2' : 'Sign-in')}
                    onClick={logOut}>Log out</NavLink>}

                <div class="animation nav3"></div>
            </nav>

        </div>


    )
}


export default Navbar;