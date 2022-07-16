import React from 'react'
import ListItem from './listItem';
import styles from './list.module.css'

const Lists = ({ lists }) => {
    return (
        <div className={styles.bg}>
            {lists.map((listItem, index) => {
                return <ListItem
                    key={index}
                    listItem={listItem}
                />
            })}

        </div>
    )
}

export default Lists;