import { AddTodoAction, ToggleTodoAction } from '../types';

export const addTodo = (todo: string): AddTodoAction => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: 'TOGGLE_TODO',
  id,
});
