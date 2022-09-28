import React from 'react'

import LeftSidebar from '../Sidebar/LeftSidebar'

import classes from '../Profile.module.css'
import PasswordContent from './PasswordContent'

function Password() {
  return (
    <div className={classes.profile}>
      <LeftSidebar />
      <PasswordContent />
    </div>
  )
}

export default Password