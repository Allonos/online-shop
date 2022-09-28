import React, { useState, useRef, useEffect } from 'react'

import { AiOutlineStar } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import { SiHotjar } from 'react-icons/si'

import classes from './Home.module.css'

import TvBestsellers from './TvBestsellers'
import WatchBestsellers from './WatchBestsellers'
import Airpods from './AirpodsBestsellers'
import HeadphonesBestsellers from './HeadphonesBestsellers'
import TurnTablesBestsellers from './TurnTablesBestsellers'
import LaptopsBestsellers from './LaptopsBestsellers'
import ConsolesBestsellers from './ConsolesBestsellers'
import PhoneBestsellers from './PhoneBestsellers'

import HomeImages from './HomeImages'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  const [showBestsellers, setShowBestsellers] = useState(1);
  const [width, setWidth] = useState(0);
  const [isShowBest, setIsShowBest] = useState(false);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <div className={classes.home}>
      <div className='input'>
        <input type='text' placeholder='Search items' />
        <GoSearch className='search' />
      </div>
      <div className={classes.title}>
        <SiHotjar className={classes.hotIcon} />
        <h1>Hot offers</h1>
      </div>
      <motion.div className={classes.carousel} ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className={classes['inner-carousel']}
        >
          {HomeImages.map(phone => {
            const { image, name, price, id } = phone;

            let rightUrl;

            if (phone.id === 'phone-1' || phone.id === 'phone-6') {
              rightUrl = 'phone';
            } else if (phone.id === 'laptop-1' || phone.id === 'laptop-2') {
              rightUrl = 'laptop'
            } else if (phone.id === 'monitor-2') {
              rightUrl = 'monitors'
            } else if (phone.id === 'audio-system-6') {
              rightUrl = 'audio'
            }
            return (
              <motion.div className={classes['carousel-item']} key={id}>
                <img src={image} alt='' />
                <p className={classes['name-tag']}>{name}</p>
                <p className={classes['price-tag']}>{price}$</p>
                <Link to={`/item/${id}/${rightUrl}`} className={classes['first-button']}>Open page</Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
      <div className={classes.manuTitle}>
        <AiOutlineStar className={classes.hotIcon} />
        <h1>Bestsellers</h1>
      </div>
      <div className={classes.bestsellers}>
        <motion.div
          transition={{ layout: { duration: 1, type: 'spring' } }}
          layout
          onClick={() => setIsShowBest(!isShowBest)}
          className={classes['bestsellers-titles']}
        >
          <motion.h2 layout='position'>{isShowBest ? 'Hide' : 'Show'} Bestsellers List</motion.h2>
          {isShowBest && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: .7 }}
              className={classes['best-titles']}
            >
              <motion.div className={classes['best-container']} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7 }}>
                <p onClick={() => setShowBestsellers(1)}>TV's</p>
                <p onClick={() => setShowBestsellers(2)}>Accessories</p>
                <p onClick={() => setShowBestsellers(3)}>Headset buds</p>
                <p onClick={() => setShowBestsellers(4)}>Headphones</p>
              </motion.div>
              <motion.div className={classes['best-container']} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7 }}>
                <p onClick={() => setShowBestsellers(5)}>Turntables</p>
                <p onClick={() => setShowBestsellers(6)}>laptops</p>
                <p onClick={() => setShowBestsellers(7)}>{'Video Games & Consoles'}</p>
                <p onClick={() => setShowBestsellers(8)}>Mobile Phones</p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        {showBestsellers === 1 && (
          <TvBestsellers />
        )}
        {showBestsellers === 2 && (
          <WatchBestsellers />
        )}
        {showBestsellers === 3 && (
          <Airpods />
        )}
        {showBestsellers === 4 && (
          <HeadphonesBestsellers />
        )}
        {showBestsellers === 5 && (
          <TurnTablesBestsellers />
        )}
        {showBestsellers === 6 && (
          <LaptopsBestsellers />
        )}
        {showBestsellers === 7 && (
          <ConsolesBestsellers />
        )}
        {showBestsellers === 8 && (
          <PhoneBestsellers />
        )}
      </div>
    </div>
  )
}

export default Home;