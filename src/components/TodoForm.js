import React from 'react';
const TodoForm = props => {
    return (
        <form className= "to-do-form">
            <input
                onChange={props.handleTodoChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="...todo"
            />
            <button className="add-btn" onClick={props.handleAddTodo}>Add</button>
            <button className="clear-btn" onClick={props.handleClearTodos}>Delete</button>
        </form>
    );
};

export default TodoForm;
