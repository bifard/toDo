import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TDefaultState, TTodo } from "../../../reducer/reducer";
import { Item } from "../../UI/Item/Item";

interface IProps {
  text: string,
  isCheck: boolean,
  idCheckbox: string,
}

export function ToDoItem({text, isCheck, idCheckbox}:IProps){
  const todos = useSelector<TDefaultState ,Array<TTodo>>(state => state.todoList);
  const dispatch = useDispatch();

  function deletTodo(){
    const todo = todos.filter(item => item.todoId !== idCheckbox);
    dispatch({type: 'UPDATE_TODO', todoList: [...todo]})
  }
  function toComplited(){
    const todo = todos.filter(item => item.todoId === idCheckbox);
    todo[0].isCompleted= !todo[0].isCompleted;
    dispatch({type: 'UPDATE_TODO', todoList: [...todos]})
  }
  return(
    <Item 
      text={text} 
      isCheck={isCheck} 
      idCheckbox={idCheckbox} 
      onChangeCheckbox={()=>toComplited()}
      onDelet ={()=>deletTodo()}
    />
  );
}