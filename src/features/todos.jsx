import React, { useState } from 'react'
import { addTodo,deleteTodo,editTodo } from './TodoSlice'
import { useSelector, useDispatch } from 'react-redux'


export function Todos(){
  const todos=useSelector((state)=>state.todos.value)
  const dispatch=useDispatch()
  const [inpval,setInpVal]=useState('')
  return(
    <>
    <div>
      <input type="text" value={inpval} onChange={(e)=>setInpVal(e.target.value)}/>
<button onClick={()=>dispatch(addTodo(inpval))}>add ele dabe</button>
      <ul>
        {todos.map(item=>(
            <>
        
            <li key={item.id}>{item.text}</li>
            <button onClick={()=>dispatch(deleteTodo(item.id))}>x</button>
            <button onClick={()=>dispatch(editTodo(item.id))}>Edit</button>
            </>
        ))}
      </ul>
    </div>
    
    </>
  )
}