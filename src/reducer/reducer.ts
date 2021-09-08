import { Reducer } from "redux";
import { generateRandomString } from "../utils/generateRandomString";
import { ArrTodo } from "./defaultStore";

export type TTodo = {
  text: string,
  isCompleted: boolean,
  todoId: string,
}

export type TDefaultState ={
  inputTodo: string,
  todoList: Array<TTodo>
}

const defaultState = {
  inputTodo: '',
  todoList: ArrTodo
}
export const UPDATE_TODO = 'UPDATE_TODO';
export const createNewTodo = (todoList:TTodo[], inputToDo: string) => {
  return {
    type: UPDATE_TODO,
    todoList: [
      ...todoList,
      {
        text: inputToDo,
        isCompleted: false,
        todoId: generateRandomString()
      }
    ]
  }
} 

export const INPUT_TODO = 'INPUT_TODO';
export const createInputTodo = (value:string) => {
  return {
    type: INPUT_TODO,
    inputTodo: value,
  }
}
export const rootReducer: Reducer<any,any> = (state = defaultState, action) => {
    switch(action.type){
      case UPDATE_TODO:
        return {
          ...state,
          inputTodo: '',
          todoList: action.todoList,
        }
      case INPUT_TODO:
        return {
          ...state,
          inputTodo: action.inputTodo,
        }
    
      default:
        return state;
    }
}