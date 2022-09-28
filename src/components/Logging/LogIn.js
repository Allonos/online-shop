import React, { useContext, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import classes from './LogIn.module.css';

import { FcGoogle } from 'react-icons/fc'
import { ImFacebook } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import AuthContext from '../../store/auth-context';
import SingUpErrorModal from './SingUpErrorModal';

function LogIn() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLaoding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    setIsLaoding(true);

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHhcWY7mwDsKRU8Cub8ZytsTZVgrKGJkE', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setIsLaoding(false)

      if (res.ok) return res.json();
      else {
        return res.json().then(data => {

          let errorMessage = 'Authentication has failed!';
          if (data && data.error && data.error.message === 'MISSING_PASSWORD') errorMessage = 'You forgot to enter password';
          else if (data && data.error && data.error.message === 'MISSING_EMAIL') errorMessage = 'You forgot to enter email';
          else if (data && data.error && data.error.message === 'INVALID_EMAIL') errorMessage = 'Please enter valid email';
          else if (data && data.error && data.error.message === 'INVALID_PASSWORD') errorMessage = 'Password you entered is incorrect';
          else if (data && data.error && data.error.message === 'EMAIL_NOT_FOUND') errorMessage = 'Email you entered does not exist';
          else if (data && data.error && data.error.message === 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.') errorMessage = 'Too many attempts try later.';
          else errorMessage = data.error.message

          throw new Error(errorMessage);
        })
      }
    }).then(data => {
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, expirationTime.toISOString());
      history.replace('/profile/account-info')
    }).catch(err => {
      setShowModal(true);
      setError(err.message);
    })
  }

  return (
    <>
      {showModal && <SingUpErrorModal onClose={() => setShowModal(false)} error={error} />}
      <div className={classes.loginContainer}>
        <div className={classes.header}>
          <h1>Log in to Online Shop</h1>
          <p>Welcome back! Login with your data that you entered during registration.</p>
        </div>
        <div className={classes.loginWithOther}>
          <div className={classes.withSth}>
            <FcGoogle className={classes.google} />
            <p>Login with Google</p>
          </div>
          <div className={classes.withSth}>
            <ImFacebook className={classes.facebook} />
            <p>Login with Facebook</p>
          </div>
          <div className={classes.orP}>
            <div className={classes.firstOr} />
            <p>Or</p>
            <div className={classes.secondOr} />
          </div>
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