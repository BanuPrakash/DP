import React from 'react'
import styles from './input.module.css'

export interface InputComponentProps {
    label:string
}

export default function InputComponent({label}:InputComponentProps) {
  return (
    <div className={styles.box}>
        {label} <input type='text' />
    </div>
  )
}
