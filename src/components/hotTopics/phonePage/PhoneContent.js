import React, { Fragment } from 'react'

import classes from '../Phones.module.css';
import PhoneLeftSidebar from './PhoneLeftSidebar';
import PhoneMiddleContent from './PhoneMiddleContent'


function PhoneContent() {
  return (
    <div className={classes.containerContent}>
      <PhoneLeftSidebar />
      <PhoneMiddleContent />
    </div>
  )
}

export default PhoneContent