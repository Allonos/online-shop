import React from 'react'

import PhoneLeftSidebar from '../phonePage/PhoneLeftSidebar'

import classes from '../Phones.module.css';
import AudioSystemMiddleContent from './AudioSystemMiddleContent';

function AudioSystemContent() {
  return (
    <div className={classes.containerContent}>
      <PhoneLeftSidebar />
      <AudioSystemMiddleContent />
    </div>
  )
}

export default AudioSystemContent