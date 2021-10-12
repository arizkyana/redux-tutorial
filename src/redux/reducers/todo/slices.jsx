import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  todos: [],
};

const slices = createSlice({
  initialState,
  name: 'Todos',
  reducers: {
    addTodo(state, actions) {
      const { todo } = actions.payload;
      state.todos.push(todo);
    },
    removeTodo(state, actions) {
      const index = actions.payload;
      const filtered = state.todos.filter((todo, i) => index !== i);
      Object.assign(state, {
        todos: filtered,
      });
    },
  },
});

export const { addTodo, removeTodo } = slices.actions;

export const useTodoDispatch = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const doAddTodo = (todo) => {
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
