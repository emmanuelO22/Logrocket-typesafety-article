
import React from 'react';
import { Todo } from './types/todos';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      className={`p-2 border rounded cursor-pointer select-none ${
        todo.completed ? 'line-through text-black' : ''
      }`}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
