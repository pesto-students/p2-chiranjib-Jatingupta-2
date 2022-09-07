import React from 'react';
import styles from './listItem.module.css'

const ListItem = ({ listItem }) => {
    return (
        <div className={styles.list}>
            <p>{listItem.originalURL}</p>
            <p>{listItem.shortURL}</p>
        </div>
    )
}

export default ListItem;