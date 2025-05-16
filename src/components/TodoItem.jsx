import React from 'react';

const TodoItem = ({ todo, index, deleteTodo, editTodo }) => {

    return (

        <li>

            {todo.text}

            <button onClick={() => editTodo(index)}>Edit</button>

            <button onClick={() => deleteTodo(index)}>Delete</button>

        </li>

    );

};

export default TodoItem;