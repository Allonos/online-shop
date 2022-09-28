import React from 'react'

import LeftSidebar from '../Sidebar/LeftSidebar'
import HistoryContent from './HistoryContent'

import classes from '../Profile.module.css'

function History() {
  return (
    <form className={classes.profile}>
      <LeftSidebar />
      <HistoryContent />
    </form>
  )
}

export default History