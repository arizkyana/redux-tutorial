import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  counter: 0,
};

const slices = createSlice({
  initialState,
  name: 'Home',
  reducers: {
    resetCounter(state) {
      Object.assign(state, {
        counter: 0,
      });
    },
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
    pembagian(state) {
      Object.assign(state, {
        counter: state.counter / 2,
      });
    },
    perkalian(state) {
      Object.assign(state, {
        counter: state.counter * 6,
      });
    },
  },
});

export const {
  decrease, increase, pembagian, perkalian,
} = slices.actions;

// custom hooks
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
