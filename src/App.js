import React, { useState, useEffect } from 'react';

import Header from './components/Header';

import TodoForm from './components/TodoForm';

import TodoList from './components/TodoList';

const App = () => {

  // Load todos from localStorage or default to empty array

  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem('todos');

    return savedTodos ? JSON.parse(savedTodos) : [];

  });

  // Current todo being edited

  const [editTodo, setEditTodo] = useState(null);

  // Save todos to localStorage whenever it changes

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos]);

  // Add new todo

  const addTodo = (text) => {

    setTodos([...todos, { text }]);

  };

  // Delete a todo by index

  const deleteTodo = (index) => {

    const newTodos = todos.filter((_, i) => i !== index);

    setTodos(newTodos);

    if (editTodo && editTodo.index === index) {

      setEditTodo(null);

    }

  };

  // Set the todo to edit

  const editTodoHandler = (index) => {

    setEditTodo({ text: todos[index].text, index });

  };

  // Update the todo after editing

  const updateTodo = (newText) => {

    const updatedTodos = [...todos];

    updatedTodos[editTodo.index].text = newText;

    setTodos(updatedTodos);

    setEditTodo(null);

  };

  return (

    <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>

      <Header />

      <TodoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodoHandler} />

    </div>

  );

};

export default App;