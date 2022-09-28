import React from 'react'

import PhoneLeftSidebar from '../phonePage/PhoneLeftSidebar'

import classes from '../Phones.module.css';
import MonitorsMiddleContent from './MonitorsMiddleContent';

function MonitorsContent() {
  return (
    <div className={classes.containerContent}>
      <PhoneLeftSidebar />
      <MonitorsMiddleContent />
    </div>
  )
}

export default MonitorsContent