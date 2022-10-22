import React from 'react'

import { IoPersonOutline } from 'react-icons/io5';

import classes from '../Profile.module.css';

function AccountInfoContent({ emailEnteredInput }) {
  return (
    <div className={classes['account-info']}>
      <div className={classes['account-info-content']}>
        <div className={classes.info}>
          <div className={classes.header}>
            <h1>Account info</h1>
          </div>
          <div className={classes['info-container']}>
            <div className={classes['info-content']}>
              <p className={classes.label}>Email</p>
              <p className={classes.input}>{emailEnteredInput}</p>
            </div>
            <div className={classes['info-content']}>
              <p className={classes.label}>Password</p>
              <p className={classes.input}>*******</p>
            </div>
          </div>
        </div>
        <div className={classes['profile-photo']}>
          <IoPersonOutline className={classes['profile-pic']} />
        </div>
      </div>
    </div>
  )
}

export default AccountInfoContent