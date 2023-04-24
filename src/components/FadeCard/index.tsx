import React, { FC } from 'react'
import { Typography } from '../../views/typography'
import CSSTransitionGroup from '../CSSTransitionGroup'
import styles from './styles/index.module.scss'

interface TProp {
  color: string
  animation: | 'fadeIn'
  | 'fadeInLeft'
  | 'fadeInTop'
  | 'fadeInBottom'
}

const FadeCard: FC<TProp> = ({ color = 'red', animation = 'fadeInTop' }) => {
  return (
    <CSSTransitionGroup
      animation={animation}
      className={styles.container}
    >
      <Typography size={46}>{color}</Typography>
      <div className={styles.color} style={{ backgroundColor: `${color}` }} />
    </CSSTransitionGroup>
  )
}

export default FadeCard
