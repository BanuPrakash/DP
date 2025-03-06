import React from 'react'
import useStore from '../store';

export default function Input() {
    let [getStore, setStore] = useStore();
  return (
    <div>
        <input type="text" onChange={(evt) => setStore(evt.target.value)} />
    </div>
  )
}
