import React, { useEffect, useState } from 'react'
import useStore from '../store';

export default function Display() {
  let [state, setState] = useState();
  let [getStore, setStore, subscribe, unsubscribe] = useStore(); // get the same store

  useEffect(() => {
    subscribe(setState);
    return () => {
      unsubscribe(setState);
    }
  }, []);

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
