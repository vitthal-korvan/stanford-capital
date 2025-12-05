"use client"

import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './input.module.css'; // Reusing input styles for consistency

const Select = forwardRef(({ label, error, options = [], className, placeholder, ...props }, ref) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <select 
        ref={ref} 
        className={clsx(styles.input, { [styles.errorInput]: error })} 
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
})

Select.displayName = 'Select'
export default Select
