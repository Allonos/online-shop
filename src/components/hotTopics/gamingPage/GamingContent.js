import React from 'react'

import PhoneLeftSidebar from '../phonePage/PhoneLeftSidebar'

import classes from '../Phones.module.css';
import GamingMiddleContent from './GamingMiddleContent';

function GamingContent() {
  return (
    <div className={classes.containerContent}>
      <PhoneLeftSidebar />
      <GamingMiddleContent />
    </div>
  )
}

export default GamingContent