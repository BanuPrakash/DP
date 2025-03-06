import React from 'react'
import styles from './checkbox.module.css'

export interface CheckboxComponentProps {
    label:string
}


export default function CheckboxComponent({label}:CheckboxComponentProps) {
  return (
    <div className={styles.box}>
        {label} <input type='checkbox' />
    </div>
  )
}
