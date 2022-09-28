import React from 'react'

import PhoneLeftSidebar from '../phonePage/PhoneLeftSidebar'

import classes from '../Phones.module.css';
import AccessoriesMiddleContent from './AccessoriesMiddleContent';

function AccessoriesContent() {
  return (
    <div className={classes.containerContent}>
      <PhoneLeftSidebar />
      <AccessoriesMiddleContent />
    </div>
  )
}

export default AccessoriesContent