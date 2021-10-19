import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '@/redux/store';
import ConfirmationContainer from '../libraries/confirmation';

const RootComponent = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

describe('Confirmation Testing', () => {
  test('input namaPengirim has value', () => {
    render(<ConfirmationContainer />, {
      wrapper: RootComponent,
    });
    const inputNamaPengirim = screen.getByTitle('Nama Pengirim');
    expect(inputNamaPengirim).toBeInTheDocument();

    userEvent.type(inputNamaPengirim, 'Andreas');
    const inputNamaPengirimValue = screen.getByTitle('Nama Pengirim');
    expect(inputNamaPengirimValue).toHaveValue('Andreas');
  });
});
