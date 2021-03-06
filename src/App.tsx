import React from 'react';
import { useSelector } from 'react-redux';
import { FormToDo } from './components/Logic/FormToDo/FormToDo';
import { ToDoItem } from './components/Logic/ToDoItem/ToDoItem';
import { Header } from './components/UI/Header/Header';
import { TDefaultState, TTodo } from './reducer/reducer';




export function App() {
  const listTodo = useSelector<TDefaultState, Array<TTodo>>(store => store.todoList)
  return (
    <div>
      <Header/>
      <FormToDo/>
      {listTodo.map(todo => <ToDoItem key={todo.todoId} text={todo.text} isCheck={todo.isCompleted} idCheckbox={todo.todoId} />)}
    </div>
  );
}


