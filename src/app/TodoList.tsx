// components/TodoList.tsx
import React from 'react';
import { Todo } from './types/todos';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No todos yet!</p>;
  }

  return (
    <ul className="space-y-2 text-black">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
