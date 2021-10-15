import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  todos: process.browser && localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos')) : [],
};

const slices = createSlice({
  initialState,
  name: 'Todos',
  reducers: {
    addTodo(state, actions) {
      const { todo } = actions.payload;
      // console.log('todo -> addTodo : ', todo);
      const newTodos = [...state.todos, todo];
      Object.assign(state, {
        ...state,
        todos: newTodos,
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo(state, actions) {
      const index = actions.payload;
      const filtered = state.todos.filter((todo, i) => index !== i);
      Object.assign(state, {
        todos: filtered,
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  removeTodo,
  removeAll,
} = slices.actions;

export const useTodoDispatch = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const doAddTodo = (todo) => {
    // console.log('todo -> reducer : ', todo);
    dispatch(addTodo(todo));
  };

  const doRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return {
    todos,
    doAddTodo,
    doRemoveTodo,
  };
};

export default slices.reducer;
