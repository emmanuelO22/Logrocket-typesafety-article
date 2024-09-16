// components/TodoApp.tsx
'use client';

import React, { useState } from 'react';
import { Todo } from './types/todos';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-md rounded">
      <h1 className="text-2xl font-bold text-center text-black mb-4">Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default TodoApp;
