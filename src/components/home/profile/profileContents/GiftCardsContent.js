import React from 'react'

import mainClasses from '../Profile.module.css';

import classes from './GiftCard.module.css'

import { IoGiftSharp } from 'react-icons/io5'

function GifCardsContent() {
  return (
    <div className={mainClasses['account-info']}>
      <div className={classes.header}>
        <h1>Gift Cards</h1>
      </div>
      <div className={classes.content}>
        <div className={classes.container}>
          <IoGiftSharp className={classes.icon} />
          <p className={classes.price}>200$ gift card</p>
          <p className={classes.works}>Works on everything after 300$</p>
          <button type='submit' className={classes.button}>Buy now</button>
        </div>
        <div className={classes.container}>
          <IoGiftSharp className={classes.icon} />
          <p className={classes.price}>10% gift card for 300$</p>
          <p className={classes.works}>Works on everything after 500$</p>
          <button type='submit' className={classes.button}>Buy now</button>
        </div>
        <div className={classes.container}>
          <IoGiftSharp className={classes.icon} />
          <p className={classes.price}>500$ gift card</p>
          <p className={classes.works}>Works on everything after 1000$</p>
          <button type='submit' className={classes.button}>Buy now</button>
        </div>
        <div className={classes.container}>
          <IoGiftSharp className={classes.icon} />
          <p className={classes.price}>20$ gift card 500$</p>
          <p className={classes.works}>Works on everything after 1000$</p>
          <button type='submit' className={classes.button}>Buy now</button>
        </div>
        <div className={classes.container}>
          <IoGiftSharp className={classes.icon} />
          <p className={classes.price}>700$ gift card</p>
          <p className={classes.works}>Works on everything after 1500$</p>
          <button type='submit' className={classes.button}>Buy now</button>
        </div>
        <div className={classes.container}>
          <IoGiftSharp className={classes.icon} />
          <p className={classes.price}>25% gift card for 500$</p>
          <p className={classes.works}>Works on everything after 1600$</p>
          <button type='submit' className={classes.button}>Buy now</button>
        </div>
        <div className={classes.container}>
          <IoGiftSharp className={classes.icon} />
          <p className={classes.price}>50% gift card for 900$</p>
          <p className={classes.works}>Works on everything after 2000$</p>
          <button type='submit' className={classes.button}>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default GifCardsContent