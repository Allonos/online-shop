import React from 'react'
import LeftSidebar from './Sidebar/LeftSidebar';

import classes from './Profile.module.css'
import AccountInfo from './profileContents/AccountInfo';

function Profile() {
  return (
    <form className={classes.profile}>
      <LeftSidebar />
      <AccountInfo />
    </form>
  )
}

export default Profile