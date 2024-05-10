export interface Todo {
    id: number;
    title: string;
    state: 'active' | 'completed';
  }
  
  export interface ToggleTodoAction {
    type: 'TOGGLE_TODO';
    id: number;
  }
  
  export interface AddTodoAction {
    type: 'ADD_TODO';
    payload: string;
  }
  
  export type TodoActionTypes = ToggleTodoAction | AddTodoAction;
  