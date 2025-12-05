"use client"

import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './input.module.css'

const Input = forwardRef(({ label, error, className, ...props }, ref) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <input 
        ref={ref} 
        className={clsx(styles.input, { [styles.errorInput]: error })} 
        {...props} 
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
})

Input.displayName = 'Input'
export default Input
