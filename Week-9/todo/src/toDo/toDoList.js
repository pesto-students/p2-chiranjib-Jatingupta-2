import React from 'react';
import ToDoForm from './todoForm';
import ToDoItem from './toDoItem';
import './style.css';

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: 'tea', done: false },
                { name: 'coffee', done: false },
                { name: 'apple', done: false }]
        }
    }

    render() {
        const { list } = this.state;

        const handleChangeChkHandler = (name, done) => {
            let tempList = [...list]
            tempList[tempList.findIndex(e => e.name === name)].done = !done
            this.setState({list:tempList})
        }

        const addItem = (name) => {
            this.setState({list:[...list,{name,done:false}]})
        }

        return (
            <div className='to-do-list'>
            <h1>To Do List</h1>
                {list.map((item,index) => (
                    <ToDoItem
                        item={item}
                        key={`${item.name} ${index}`}
                        handleChangeChk={handleChangeChkHandler}
                    />
                    
                ))
                }
                <ToDoForm 
                addItem={addItem}
                />
            </div>
        )

    }
}

export default ToDoList;