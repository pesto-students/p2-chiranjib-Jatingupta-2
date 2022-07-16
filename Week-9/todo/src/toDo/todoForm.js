import React from 'react';
import './style.css';

class ToDoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    render() {
        const { name } = this.state;

        const addItem = (e) => {
            e.preventDefault();
            this.props.addItem(name);
            this.setState({ name: '' })
        }

        return <>
            <form 
            className="add-item"
            onSubmit={addItem}>
                <input
                    type="text"
                    value={name}
                   
                    placeholder='Add Item'
                    onChange={e => this.setState({ name: e.target.value })}
                />
                <button type='submit' >Add New Item</button>
            </form>
        </>
    }
}

export default ToDoForm;