import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countDecreament, countIncreament } from '../../store/Actions/CountActions';

export default function Count() {
  const count = useSelector(state => state.Count.count);
  const dispatch = useDispatch();
  const handleIncreament = () => {
    dispatch(countIncreament());
  }
  const handleDecreament = () => {
    dispatch(countDecreament());
  }
  return (
    <>
    <div>Count: {count}</div>
    <button onClick={handleIncreament}>+</button>
    <button onClick={handleDecreament}>-</button>
    </>
  )
}
