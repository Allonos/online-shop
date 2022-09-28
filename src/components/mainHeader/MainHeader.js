import React, { Fragment, Profiler, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';
import { IoPersonOutline } from 'react-icons/io5'
import AuthContext from '../../store/auth-context';

import { useSelector } from 'react-redux';

function MainHeader(props) {
  const [isActive, setIsActive] = useState(false);

  const makeItActive = () => {
    setIsActive(!isActive)
  }

  const selected = useSelector(state => state.cart.chosenItems)

  const authCtx = useContext(AuthContext)

  return (
    <Fragment>
      <header className='header-in-burg'>
        <nav className='navbar'>
          <Link to='/home' className='nav-link'>
            <h1 className='heading-in-link'>Online shop</h1>
          </Link>
          <ul className={isActive ? 'nav-menu active' : 'nav-menu'}>
            <li className={isActive ? 'nav-item active' : 'nav-item'}>
              <Link to='/phones' className='nav-link' onClick={() => setIsActive(false)}>Mobile phones</Link>
            </li>
            <li className={isActive ? 'nav-item active' : 'nav-item'}>
              <Link to='/laptops' className='nav-link' onClick={() => setIsActive(false)}>Laptops</Link>
            </li>
            <li className={isActive ? 'nav-item active' : 'nav-item'}>
              <Link to='/personal-computers' className='nav-link' onClick={() => setIsActive(false)}>Gaming</Link>
            </li>
            <li className={isActive ? 'nav-item active' : 'nav-item'}>
              <Link to='/accessories' className='nav-link' onClick={() => setIsActive(false)}>Accessories</Link>
            </li>
            <li className={isActive ? 'nav-item active' : 'nav-item'}>
              <Link to='/audio-system' className='nav-link' onClick={() => setIsActive(false)}>Audio System</Link>
            </li>
            <li className={isActive ? 'nav-item active' : 'nav-item'}>
              <Link to='/tv-monitors' className='nav-link' onClick={() => setIsActive(false)}>TV | Monitors</Link>
            </li>
            <li className={isActive ? 'cart active' : 'cart'} onClick={() => props.setShowCartModal(true)}>
              <h1 onClick={() => setIsActive(false)}>Cart {selected.length}</h1>
            </li>
            {!authCtx.isLoggedIn && (
              <li className={classes.liLink}>
                <Link to='/log-in' className={isActive ? 'profile active' : 'profile'} onClick={() => setIsActive(false)}>
                  <IoPersonOutline className={isActive ? 'profile-pic active' : 'profile-pic'} />
                </Link>
              </li>
            )}

            {authCtx.isLoggedIn && (
              <li className={isActive ? 'profile-li active' : 'profile-li'} onClick={() => setIsActive(false)}>
                <Link to='/profile/account-info' className={isActive ? 'profile-link active' : 'profile-link'} onClick={() => setIsActive(false)}>
                  <IoPersonOutline className={isActive ? 'profile-pic-logged active' : 'profile-pic-logged'} />
                </Link>
              </li>
            )}
          </ul>
          <div className={isActive ? 'hamburger active' : 'hamburger'} onClick={makeItActive}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>

    </Fragment >
  )
}

export default MainHeader