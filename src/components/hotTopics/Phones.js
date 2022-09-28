import React, { Fragment, useState } from 'react'

import { GoSearch } from 'react-icons/go';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import classes from './Phones.module.css';
import PhoneLeftSidebar from './phonePage/PhoneLeftSidebar';
import PhoneContent from './phonePage/PhoneContent';

function Phones() {
  return (
    <Fragment>
      <PhoneContent />
    </Fragment>
  )
}

export default Phones