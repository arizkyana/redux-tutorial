import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  counter: 0,
};

const slices = createSlice({
  initialState,
  name: 'Home',
  reducers: {
    increase(state) {
      Object.assign(state, {
        counter: state.counter + 1,
      });
    },
    decrease(state) {
      Object.assign(state, {
        counter: state.counter - 1,
      });
    },
  },
});

export const { decrease, increase } = slices.actions;

export const useHomeDispatch = () => {
  const { home } = useSelector((state) => state);
  const dispatch = useDispatch();

  const makeIncrement = () => {
    dispatch(increase());
  };

  const makeDecrement = () => {
    dispatch(decrease());
  };

  return {
    home,
    makeIncrement,
    makeDecrement,
  };
};

export default slices.reducer;
