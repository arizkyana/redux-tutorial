import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// createSlice -> mengelola state , fungsi reducer
const slices = createSlice({
  name: 'Login',
  initialState: {
    loading: false,
  },
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        loading: action.payload,
      });
    },
  },
});

const { toggleLoading } = slices.actions;

// custom hooks (dispatcher)
// bisnis lojik : hit API, lojik program dsb
export function useLoginDispatcher() {
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch();

  // hit api -> login
  const doLogin = async (email, password) => {
    dispatch(toggleLoading(true));
    setTimeout(() => {
      console.log('hit api login: ', {
        email,
        password,
      });
      const token = '12341234abcdefgh';
      localStorage.setItem('token', token);
      dispatch(toggleLoading(false));
    }, 3000);
    // await fetch('/api/login', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
  };

  return {
    login, // state
    doLogin, // function lojik
  };
}

export default slices.reducer;
