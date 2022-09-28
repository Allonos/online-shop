import React, { useState, useRef, useEffect } from 'react'

import classes from './Home.module.css'

import { motion } from 'framer-motion';

import ConsoleImages from './ConsolesImages';
import { Link } from 'react-router-dom';

function ConsolesBestsellers() {
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
        {ConsoleImages.map(ConsoleImage => {
          const { image, desc, price, id } = ConsoleImage;
          return (
            <motion.div className={classes['tv-carousel-item']} key={id}>
              <img src={image} alt='' />
              <p className={classes['tv-name-tag']}>{desc}</p>
              <p className={classes['tv-price-tag']}>{price}$</p>
              <Link to={`/item/${id}/gaming`} className={classes['tv-first-button']}>Check it!</Link>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default ConsolesBestsellers