import React from 'react'
import PhoneLeftSidebar from '../phonePage/PhoneLeftSidebar'

import classes from '../Phones.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import LaptopMiddleContent from './LaptopMiddleContent';

function LaptopContent() {
  return (
    <div className={classes.containerContent}>
      <PhoneLeftSidebar />
      <LaptopMiddleContent />
    </div>
  )
}

export default LaptopContent