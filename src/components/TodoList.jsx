import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, editTodo }) => {

    return (

        <ul>

            {todos.length === 0 && <p>No todos available</p>}

            {todos.map((todo, index) => (

                <TodoItem

                    key={index}

                    todo={todo}

                    index={index}

                    deleteTodo={deleteTodo}

                    editTodo={editTodo}

                />

            ))}

        </ul>

    );

};

export default TodoList;