import React, { useState, useRef, useEffect } from 'react'

import classes from './Home.module.css'

import { motion } from 'framer-motion';

import laptop from './LaptopImages';
import { Link } from 'react-router-dom';

function LaptopsBestsellers() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <motion.div className={classes['tv-carousel']} ref={carousel} whileTap={{ cursor: "grabbing" }}>
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        className={classes['tv-inner-carousel']}
      >
        {laptop.map(laptop => {
          const { image, desc, price, id } = laptop;
          return (
            <motion.div className={classes['tv-carousel-item']} key={id}>
              <img src={image} alt='' />
              <p className={classes['tv-name-tag']}>{desc}</p>
              <p className={classes['tv-price-tag']}>{price}$</p>
              <Link to={`item/${id}/laptop`} className={classes['tv-first-button']}>Check it!</Link>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default LaptopsBestsellers