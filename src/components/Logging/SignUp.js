import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import classes from './SignUp.module.css'

import { FcGoogle } from 'react-icons/fc'
import { ImFacebook } from 'react-icons/im'
import SingUpErrorModal from './SingUpErrorModal';

function SignUp() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value


    setIsLoading(true);

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHhcWY7mwDsKRU8Cub8ZytsTZVgrKGJkE', {
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
      setIsLoading(false);
      if (res.ok) return res.json();
      else {
        return res.json().then(data => {
          let errorMessage = 'Authentication has failed!';
          if (data && data.error && data.error.message && data.error.message === 'EMAIL_EXISTS') errorMessage = 'Email you enter already exists! Please try again'
          else if (data && data.error && data.error.message === 'WEAK_PASSWORD : Password should be at least 6 characters') errorMessage = 'Password should be at least 6 characters long';
          else if (data && data.error && data.error.message === 'MISSING_PASSWORD') errorMessage = 'You forgot to enter password';
          else if (data && data.error && data.error.message === 'MISSING_EMAIL') errorMessage = 'You forgot to enter email';
          else if (data && data.error && data.error.message === 'INVALID_EMAIL') errorMessage = 'Please enter valid email';
          else if (data && data.error && data.error.message === 'INVALID_PASSWORD') errorMessage = 'Please enter valid password';
          else errorMessage = data.error.message

          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      history.replace('/log-in')
    }).catch(err => {
      setShowModal(true);
      setError(err.message)
    })
  }

  return (
    <>
      {showModal && <SingUpErrorModal onClose={() => setShowModal(false)} error={error} />}
      <div className={classes.loginContainer}>
        <div className={classes.header}>
          <h1>Sign up to online shop</h1>
          <p>Welcome! Sign up with your data that you want to enter during log in.</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.inputs}>
            <div className={classes.secondInput}>
              <input type='mail' placeholder={`Please enter your email`} ref={emailInputRef} />
            </div>
            <div className={classes.secondInput}>
              <input type='password' placeholder='Please enter your password' ref={passwordInputRef} />
            </div>
            {isLoading && <p>Loading...</p>}
          </div>
          <div className={classes.buttons}>
            <button type='submit'>Sign up</button>
          </div>
        </form>
        <div className={classes.already}>
          <p>Already have an account?</p>
          <Link to='/log-in' className={classes.alreadyLink}>Log in</Link>
        </div>
      </div>
    </>
  )
}

export default SignUp