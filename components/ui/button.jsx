"use client"

import clsx from 'clsx'
import styles from './button.module.css'

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  loading = false, 
  ...props 
}) {
  return (
    <button 
      className={clsx(styles.btn, styles[variant], className, { [styles.loading]: loading })}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <span className={styles.spinner}></span> : children}
    </button>
  )
}
