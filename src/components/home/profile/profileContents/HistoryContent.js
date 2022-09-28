import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import mainClasses from '../Profile.module.css'
import classes from './History.module.css';

import { clearHistory } from '../../../../features/cart';

function HistoryContent() {
  const selected = useSelector(state => state.cart.orderHistory);

  const dispatch = useDispatch();

  return (
    <div className={mainClasses['account-info']}>
      <div className={classes.header}>
        <h1>History</h1>
        <p onClick={() => dispatch(clearHistory())}>Delete history</p>
      </div>
      <div className={classes.content}>
        {selected.map(selected => (
          <div className={classes.container} key={selected.item.id}>
            <img src={selected.item.image} className={classes.img} />
            <div className={classes['history-desc']}>
              <p className={classes.name}>{selected.item.title}</p>
              <p className={classes.quantity}>Quantity:{selected.quantity}</p>
              <p className={classes.price}>Price:{selected.item.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HistoryContent