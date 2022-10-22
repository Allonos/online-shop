import React, { useContext, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import classes from './LogIn.module.css';

import { FcGoogle } from 'react-icons/fc'
import { ImFacebook } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import AuthContext from '../../store/auth-context';
import SingUpErrorModal from './SingUpErrorModal';

function LogIn({ isLoading, showModal, error, emailInputRef, passwordInputRef, submitHandler, setShowModal }) {
  return (
    <>
      {showModal && <SingUpErrorModal onClose={() => setShowModal(false)} error={error} />}
      <div className={classes.loginContainer}>
        <div className={classes.header}>
          <h1>Log in to Online Shop</h1>
          <p>Welcome back! Login with your data that you entered during registration.</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.inputs}>
            <div className={classes.firstInput}>
              <GrMail className={classes.mail} />
              <input type='mail' className={classes.input} placeholder='Please enter your email' ref={emailInputRef} />
            </div>
            <div className={classes.firstInput}>
              <RiLockPasswordFill className={classes.lock} />
              <input type='password' className={classes.input} placeholder='Please enter your password' ref={passwordInputRef} />
            </div>
            {isLoading && <p className='centered'>Loading...</p>}
          </div>
          <div className={classes.buttons}>
            <button type='submit'>Log in</button>
          </div>
        </form>
        <div className={classes.dontHave}>
          <p>Don't have an account?</p>
          <Link className={classes.dontHaveBtn} to='/register'>Sign up</Link>
        </div>
      </div>
    </>
  )
}

export default LogIn