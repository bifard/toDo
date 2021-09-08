import React from "react";
import styles from './item.module.css';
interface IProps {
  text:string, 
  isCheck:boolean, 
  idCheckbox: string,
  onChangeCheckbox: () => void,
  onDelet: () => void
}

export function Item({text,isCheck, idCheckbox, onChangeCheckbox, onDelet}:IProps){
  return(
    <div className={styles.container}>
      <input onChange={onChangeCheckbox} type='checkbox' id={idCheckbox} checked={isCheck} className={styles.checkbox}/>
      <label className={styles.label} htmlFor={idCheckbox}/>
      <label className={styles.text} htmlFor={idCheckbox} >{text}</label>
      <div className={styles.del} onClick={onDelet}>Del</div>
    </div>
  );
}