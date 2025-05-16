import React, { useState, useEffect, useRef } from 'react';



const TodoForm = ({ addTodo, editTodo, updateTodo }) => {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {

        if (editTodo) {

            setInput(editTodo.text);

            inputRef.current.focus();

        }

    }, [editTodo]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!input.trim()) {

            alert("Todo can't be empty");

            return;

        }

        if (editTodo) {

            updateTodo(input);

        } else {

            addTodo(input);

        }

        setInput('');

    };

    return (

        <form onSubmit={handleSubmit}>

            <input

                type="text"

                placeholder="Add Todo"

                value={input}

                onChange={(e) => setInput(e.target.value)}

                ref={inputRef}

            />

            <button type="submit">{editTodo ? "Update" : "Add"}</button>

        </form>

    );

};

export default TodoForm;