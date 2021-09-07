import React, { ChangeEvent, FormEvent, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TDefaultState, TTodo } from "../../../reducer/reducer";
import { generateRandomString } from "../../../utils/generateRandomString";
import { Form } from "../../UI/Form/Form";

export function FormToDo() {
  const inputToDo = useSelector<TDefaultState, string>(store => store.inputTodo);
  const todoList = useSelector<TDefaultState,Array<TTodo>>(store => store.todoList)
  const dispatch = useDispatch();


  function addToDo() {
    dispatch({type: 'UPDATE_TODO', todoList:[
      ...todoList,
      {
        text: inputToDo,
        isCompleted: false,
        todoId: generateRandomString()
      }
    ]})
  }

  function handleChange(event:ChangeEvent<HTMLInputElement>){
    dispatch({type: 'INPUT_TODO', inputTodo: event.target.value})
  }
  
  return(
    <Form inputValue={inputToDo} addToDo={()=>addToDo()} hendelChange={handleChange}/>
  );
}