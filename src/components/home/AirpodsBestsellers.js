import React, { useRef, useState, useEffect } from 'react'

import airpodImg from './AirpodsBestsellerImages';

import { motion } from 'framer-motion';

import classes from './Home.module.css'
import { Link } from 'react-router-dom';

function AirpodsBestsellers() {
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
        {airpodImg.map(airpod => {
          const { image, desc, price, id } = airpod;
          return (
            <motion.div className={classes['tv-carousel-item']} key={id}>
              <img src={image} alt='' />
              <p className={classes['tv-name-tag']}>{desc}</p>
              <p className={classes['tv-price-tag']}>{price}$</p>
              <Link to={`item/${id}/audio`} className={classes['tv-first-button']}>Check it!</Link>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default AirpodsBestsellers