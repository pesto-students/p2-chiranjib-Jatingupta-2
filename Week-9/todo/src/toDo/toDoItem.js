import React from 'react';
import './style.css';

class ToDoItem extends React.Component {

    render() {
        const { name, done } = this.props.item
        return (

            <div className='todo-item'>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={this.props.handleChangeChk.bind(null,name, done)}
                />
                <h3>{name}</h3>
            </div>

        )
    }

}


export default ToDoItem;