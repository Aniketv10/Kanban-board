import React from 'react';
import styles from './List.module.css';

const List = () => {
    return (
        <>
        <div class={styles.griding}>
            <div class={styles.griding1}>BackLog</div>
            <div class={styles.griding1}>To-Do</div>
            <div class={styles.griding1}>In-Progress</div>
            <div class={styles.griding1}>Done</div>
        </div>
        </>
    )
}
export default List;