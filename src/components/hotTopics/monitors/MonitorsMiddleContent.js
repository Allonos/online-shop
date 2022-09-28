import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from '../Phones.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import MonitorsData from './MonitorsData'
import { addItemToCart } from '../../../features/cart';

function MonitorsMiddleContent() {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const addCartHandler = (e, monitor) => {
    e.preventDefault();
    dispatch(addItemToCart(monitor));
  }

  return (
    <div className={classes.phoneContent}>
      <div className={classes.middleTitle}>
        <h1>Tv monitors </h1>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <p>In Stock</p>
      </div>
      <div className={classes.imageContainer}>
        {MonitorsData.map(monitor => {
          const { image, title, price, id } = monitor;
          return (
            <Link to={`/item/${id}/monitors`} className={classes.images} key={id}>
              <img src={image} />
              <p className={classes.infoImage}>{title}</p>
              <div className={classes.priceAddCart}>
                <p className={classes.priceImage}>{price}$</p>
                <AiOutlineShoppingCart onClick={e => addCartHandler(e, monitor)} className={classes.shoppingCart} />
              </div>
            </Link>
          )
        })}
      </div>
      <p className={classes.showMore}>Show more</p>
    </div>
  )
}

export default MonitorsMiddleContent;