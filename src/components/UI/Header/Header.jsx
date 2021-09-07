import React from "react";
import styles from './header.module.css';

export function Header() {
  return(
    <div className={styles.container}>
      <h1 className={styles.h1}>ToDo</h1>
    </div>
  );
}