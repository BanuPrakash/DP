import React, {useState} from 'react'
import useStore from '../store';

export default function Display() {
  let [state, setState] = useState();
  let [getStore, setStore] = useStore(); // get the same store

  function storeToState() {
    setState(getStore());
  }
  return (
    <div>
        Display Component: {state}
        <button type="button" onClick={storeToState}>Get Store Data</button>    
    </div>
  )
}
