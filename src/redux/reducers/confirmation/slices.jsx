import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  success: false,
  message: '',
};

const slices = createSlice({
  initialState,
  name: 'Confirmation',
  reducers: {
    updateConfirmation(state, action) {
      const { success, message } = action.payload;
      Object.assign(state, {
        ...state,
        success,
        message,
      });
    },
  },
});

export const { updateConfirmation } = slices.actions;

// custom hooks
export const useConfirmationDispatch = () => {
  const { confirmation } = useSelector((state) => state);
  const dispatch = useDispatch();

  const submitPayment = async (payload) => {
    try {
      // const response = await fetch('/api/confirmation', {
      await fetch('/api/confirmation', {
        method: 'post',
        body: JSON.stringify(payload),
      });
      // const data = await response.json();

      // if (data.transaction.length === 0) {
      //   dispatch(updateConfirmation({
      //     success: false,
      //     message: 'Transaksi Kosong',
      //   }));
      //   return;
      // }

      // update state confirmation
      dispatch(updateConfirmation({
        success: true,
        message: 'Pembayaran berhasil',
      }));
    } catch (error) {
      dispatch(updateConfirmation({
        success: false,
        message: 'Pembayaran gagal',
      }));
    }
  };

  return {
    confirmation,
    submitPayment,
  };
};

export default slices.reducer;
