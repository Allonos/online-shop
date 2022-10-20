import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsApple } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import classes from './ItemDetails.module.css'
import secondaryClasses from '../home/userCart/Cart.module.css'

import phonesData from '../hotTopics/phonePage/phonesData';
import LaptopsData from '../hotTopics/laptopPage/LaptopData';
import GamingData from '../hotTopics/gamingPage/GamingData';
import AccessoriesData from '../hotTopics/accessories/AccessoriesData';
import AudioSystemData from '../hotTopics/audioSystem/AudioSystemData';
import MonitorsData from '../hotTopics/monitors/MonitorsData';
import Modal from '../../modal/Modal';
import { addItemToCart, resetItems, setOrderHistory } from '../../features/cart';


function FirstItemDetail() {
  const [isBought, setIsBought] = useState(false);
  const { id, type } = useParams();

  const dispatch = useDispatch();

  const addCartHandler = (e, item) => {
    e.preventDefault();
    dispatch(addItemToCart(item))
  }

  const item = useMemo(() => {
    if (type === 'phone') return phonesData.find(item => item.id === id)
    else if (type === 'laptop') return LaptopsData.find(item => item.id === id)
    else if (type === 'gaming') return GamingData.find(item => item.id === id)
    else if (type === 'accessories') return AccessoriesData.find(item => item.id === id)
    else if (type === 'audio') return AudioSystemData.find(item => item.id === id)
    else if (type === 'monitors') return MonitorsData.find(item => item.id === id)
  }, [type, id])

  const buy = (item) => {
    setIsBought(true);
    dispatch(setOrderHistory({ quantity: 1, item }));
    dispatch(resetItems());
  }

  return (
    <div className={classes.itemDetail}>
      <div className={classes.imgContainer}>
        <img src={item.image} className={classes.itemImg} />
      </div>
      <div className={classes.detailContainer}>
        <div className={classes.brand}>
          <BsApple className={classes.brandLogo} />
          <h1>Apple</h1>
        </div>
        <div className={classes.title}>
          <p>{item.title}</p>
        </div>
        <div className={classes.colorAndDetails}>
          <div className={classes.phoneDetails}>
            <div className={classes.phoneDetailsContent}>
              <p className={classes.detailName}>Display Size ------</p>
              <p>{item.size}</p>
            </div>
            <div className={classes.phoneDetailsContent}>
              <p className={classes.detailName}>RAM Memory ------</p>
              <p>{item.ram}</p>
            </div>
            <div className={classes.phoneDetailsContent}>
              <p className={classes.detailName}>ROM Memory ------</p>
              <p>{item.rom}</p>
            </div>
            <div className={classes.phoneDetailsContent}>
              <p className={classes.detailName}>Main Camera ------</p>
              <p>{item.camera}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.overal}>
        <div className={classes.price}>
          <h1>Price</h1>
          <p>{item.price}$</p>
        </div>
        <div className={classes.buttons}>
          <button type='submit' className={classes.buy} onClick={() => buy(item)}>Buy Now</button>
          <button onClick={(e) => addCartHandler(e, item)} type='submit' className={classes.addToCart}>
            Add to cart
          </button>
        </div>
      </div>
      {isBought && (
        <Modal type='bought'>
          <div className={secondaryClasses['bought-container']}>
            <h1 className={secondaryClasses.bought}>You have successfully bought items.</h1>
            <Link to='/home' onClick={() => setIsBought(false)} className={secondaryClasses['go-home']}>Go to main page</Link>
            <button onClick={() => setIsBought(false)} className={secondaryClasses['see-history']}>Go back</button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default FirstItemDetail