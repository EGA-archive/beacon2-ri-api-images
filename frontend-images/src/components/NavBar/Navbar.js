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

    const handleClik = () => {
        console.log('hejek')
        setIsLoggedIn(false)
        auth.signOut()
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
                >Individuals</NavLink>
                <NavLink exact
                    to="/occurrences"
                    className={({ isActive }) => (isActive ? 'Occurrences2' : 'Occurrences')}
                >Occurrences</NavLink>
                <NavLink exact
                    to="/measurements"
                    className={({ isActive }) => (isActive ? 'Measurements2' : 'Measurements')}
                >Measurements</NavLink>
                <NavLink exact
                    to="/conditions"
                    className={({ isActive }) => (isActive ? 'Conditions2' : 'Conditions')}
                >Conditions</NavLink>
                <NavLink exact
                    to="/features"
                    className={({ isActive }) => (isActive ? 'Features2' : 'Features')}
                >Features</NavLink>
                <NavLink exact
                    to="/devices"
                    className={({ isActive }) => (isActive ? 'Devices2' : 'Devices')}
                >Devices</NavLink>
                <div class="animation nav2"></div>
            </nav>
            <nav className='nav3'>
                {!isLoggedIn &&
                    <NavLink exact
                        to="/sign-in"
                        className={({ isActive }) => (isActive ? 'Sign-in2' : 'Sign-in')}
                    > Sign in</NavLink>}
                {isLoggedIn &&
                    <NavLink exact
                        to="/individuals"
                        className={({ isActive }) => (isActive ? 'Individuals2' : 'Individuals')}
                        onClick={handleClik}>Log out</NavLink>}

                <div class="animation nav3"></div>
            </nav>

        </div>

    )
}


export default Navbar;