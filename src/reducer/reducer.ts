import { Reducer } from "redux";
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

export const rootReducer: Reducer<any,any> = (state = defaultState, action) => {
    switch(action.type){
      case 'UPDATE_TODO':
        return {
          ...state,
          inputTodo: '',
          todoList: action.todoList,
        }
      case 'INPUT_TODO':
        return {
          ...state,
          inputTodo: action.inputTodo,
        }
    
      default:
        return state;
    }
}