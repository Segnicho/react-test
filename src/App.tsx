import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from './hooks/reduxHooks';
import { addTodo, toggleTodo, editTodo } from './redux/reducers/todos';

function App() {
  const todos = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>('');
  const [edit, setEdit] = useState<{ id: number | null, title: string }>({ id: null, title: '' });

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <input
        className="form-input px-4 py-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <ul className="list-disc space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={todo.state === 'completed'}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {edit.id === todo.id ? (
              <input
                className="form-input px-2 py-1 rounded"
                value={edit.title}
                onChange={e => setEdit({ ...edit, title: e.target.value })}
                onBlur={() => { dispatch(editTodo({ id: todo.id, title: edit.title })); setEdit({ id: null, title: '' }); }}
              />
            ) : (
              <span
                className={`flex-1 cursor-pointer ${todo.state === 'completed' ? 'line-through text-gray-500' : ''}`}
                onDoubleClick={() => setEdit({ id: todo.id, title: todo.title })}
              >
                {todo.title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
