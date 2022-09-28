import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './LeftSidebar.module.css'
import { IoPersonOutline } from 'react-icons/io5';
import { IoIosLock } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillGift } from 'react-icons/ai'
import { FaHistory } from 'react-icons/fa'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'


import { useHistory } from 'react-router-dom';
import AuthContext from '../../../../store/auth-context';
import Cart from '../../userCart/Cart';

function LeftSidebar() {
  const [showCartModal, setShowCartModal] = useState(false);

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();

    history.replace('/log-in');
  }

  return (
    <div className={classes['left-sidebar']}>
      <div className={classes.header}>
        <IoPersonOutline className={classes['profile-photo']} />
        <p>Welcome</p>
      </div>
      <div className={classes['account-settings']}>
        <Link to='/profile/account-info' className={classes['account-container']}>
          <BsFillPersonFill className={classes['icon']} />
          <p>Account info</p>
        </Link>
        <Link to='/profile/gift-cards' className={classes['account-container']}>
          <AiFillGift className={classes['icon']} />
          <p>Gift cards</p>
        </Link>
        <Link to='/history' className={classes['account-container']}>
          <FaHistory className={classes['icon']} />
          <p>History</p>
        </Link>
        <Link to='/profile/password' className={classes['account-container']}>
          <IoIosLock className={classes['icon']} />
          <p>Password</p>
        </Link>
        <div onClick={() => setShowCartModal(true)} className={classes['account-container']}>
          <BsFillBasket2Fill className={classes['icon']} />
          <p>Basket</p>
        </div>
        {showCartModal && <Cart onClose={() => setShowCartModal(false)} />}
        <div className={classes.logout} onClick={logoutHandler} >
          <BiLogOut className={classes['logout-icon']} />
          <button className={classes['logout-btn']} type='submit'>logout</button>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar