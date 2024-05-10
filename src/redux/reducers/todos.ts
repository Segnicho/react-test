import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types';

const initialState: Todo[] = [
  { id: 1, title: 'Learn Redux', state: 'active' },
  { id: 2, title: 'Write an app', state: 'active' },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.unshift({ id: Date.now(), title: action.payload, state: 'active' });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.state = todo.state === 'active' ? 'completed' : 'active';
      }
      return state.sort((a, b) => (a.state === 'completed' ? 1 : -1) - (b.state === 'completed' ? 1 : -1));
    },
    editTodo: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].title = action.payload.title;
      }
    }
  }
});

export const { addTodo, toggleTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
