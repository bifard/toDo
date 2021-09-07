import React from "react";  
import { useDispatch, useSelector } from "react-redux";
import { TDefaultState, TTodo } from "../reducer/reducer";

export function ToDo({text, isCompleted, index}:{text:string, isCompleted: boolean, index: number}){
  const todoList = useSelector<TDefaultState, TTodo[]>(state => state.todoList)
  const dispatch = useDispatch()
  function hendleOnChange(event:React.ChangeEvent<HTMLInputElement>){
    todoList[index].isCompleted = event.target.checked;
    dispatch({type: 'ADD_TODO', todoList: todoList })
  }
  function deletTodo(){
    const a = todoList.splice(index,1)
    dispatch({type: 'ADD_TODO', todoList: [...todoList]})
  }
  return(
    <div>
      <input onChange={(event)=>hendleOnChange(event)} type="checkbox" />
      <strong>{text}</strong>
      <button onClick={()=> deletTodo()}></button>
    </div>
  );
}