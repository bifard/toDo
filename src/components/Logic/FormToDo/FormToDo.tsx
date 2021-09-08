import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createInputTodo, createNewTodo, TDefaultState, TTodo,} from "../../../reducer/reducer";
import { Form } from "../../UI/Form/Form";

export function FormToDo() {
  const inputToDo = useSelector<TDefaultState, string>(store => store.inputTodo);
  const todoList = useSelector<TDefaultState,Array<TTodo>>(store => store.todoList)
  const dispatch = useDispatch();

 
  function addToDo() {
    dispatch(createNewTodo(todoList, inputToDo))
  }
 
  function handleChange(event:ChangeEvent<HTMLInputElement>){
    dispatch(createInputTodo(event.target.value))
  }
  
  return(
    <Form inputValue={inputToDo}  addToDo={()=>addToDo()} hendelChange={handleChange}/>
  );
}