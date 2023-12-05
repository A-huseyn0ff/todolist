import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'


export function Counter(){
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  function handletopla(){
    dispatch(increment())
  }
  function handlecix(){
    dispatch(decrement())
  }
  return(
    <>
    <div>
      <button onClick={handletopla}>+</button>
      <p>{count}</p>
      <button onClick={handlecix}>-</button>
    </div>
    </>
  )
}