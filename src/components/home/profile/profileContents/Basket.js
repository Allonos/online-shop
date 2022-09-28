import React from 'react'

import LeftSidebar from '../Sidebar/LeftSidebar'

import classes from '../Profile.module.css'
import BasketContent from './BasketContent'

function Basket() {
  return (
    <form className={classes.profile}>
      <LeftSidebar />
      <BasketContent />
    </form>
  )
}

export default Basket