import React, { useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../../store/auth-context';
import SingUpErrorModal from '../../../Logging/SingUpErrorModal';

import mainClasses from '../Profile.module.css'
import classes from './Password.module.css';

function PasswordContent({ passwordEnteredInput }) {
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const newPasswordInputRef = useRef();
  const oldPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    const oldEnteredPassword = oldPasswordInputRef.current.value;

    if (oldEnteredPassword === passwordEnteredInput) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBHhcWY7mwDsKRU8Cub8ZytsTZVgrKGJkE', {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(data => {
            let errorMessage = 'Authentication Failed!';
            if (data && data.error && data.error.message === 'MISSING_PASSWORD') {
              errorMessage = 'You forgot to enter a password'
            } else if (data && data.error && data.error.message === 'WEAK_PASSWORD : Password should be at least 6 characters') {
              errorMessage = 'Password should be at least 6 characters long'
            } else if (data && data.error && data.error.message === 'CREDENTIAL_TOO_OLD_LOGIN_AGAIN') {
              errorMessage = 'We are sorry for this. Please log out and log in again.'
            }
            else errorMessage = data.error.message

            throw new Error(errorMessage);
          });
        }
      }).then(data => {
        authCtx.login(data.idToken);
        history.replace('/log-in');
      }).catch(err => {
        if (err.message === 'Error: MISSING_PASSWORD') {
          setError('You forgot to enter a password')
        }
        setShowModal(true);
        setError(err.message);
      })
    } else {
      setShowModal(true)
      setError(`Your old password doesn't match`)
    }

  }

  return (
    <React.Fragment>
      {showModal && <SingUpErrorModal onClose={() => setShowModal(false)} error={error} />}
      <form onSubmit={submitHandler} className={mainClasses['account-info']} type='password'>
        <div className={classes.header}>
          <h1>Change Password</h1>
        </div>
        <div className={classes['change-password']}>
          <div className={classes.container}>
            <label>old password</label>
            <input ref={oldPasswordInputRef} type='password' placeholder='old password' />
          </div>
          <div className={classes.container}>
            <label>New password</label>
            <input ref={newPasswordInputRef} type='password' placeholder='New password' />
          </div>
        </div>
        <div className={classes.save}>
          <button type='submit'>Save</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default PasswordContent