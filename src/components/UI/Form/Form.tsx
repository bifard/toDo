import React, { ChangeEvent, SyntheticEvent } from "react";
import styles from './form.module.css'

interface IForm {
  inputValue: string,
  addToDo:()=> void,
  hendelChange: (event:ChangeEvent<HTMLInputElement>)=> void,
}

export function Form({inputValue, addToDo, hendelChange}:IForm){
  return(
    <form className={styles.form}>
      <input 
        onChange={(event)=>hendelChange(event)} 
        className={styles.input} 
        value={inputValue}
        ></input>
      
      <button onClick={(event)=>{
        event.preventDefault();
        addToDo();
      }} className={styles.button}>Add ToDo</button>
    </form>
  );
}