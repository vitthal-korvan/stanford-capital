"use client"

import clsx from 'clsx'
import styles from './card.module.css'

export default function Card({ children, className }) {
  return (
    <div className={clsx(styles.card, className)}>
      {children}
    </div>
  )
}
