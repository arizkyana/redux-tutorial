import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '@/redux/store';
import HomeContainer from '../libraries/home';

const RootComponent = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

describe('Home Testing', () => {
  beforeEach(() => {
    render(
      <HomeContainer />, { wrapper: RootComponent },
    ); // Arrange
  });
  test('home page have content', () => {
    const counterLabel = screen.getAllByText('Counter'); // Action
    expect(counterLabel).toBeInTheDocument(); // Assert
  });
  test('increment counter from button + Add', async () => {
    const incrementButton = screen.getByTestId('increment'); // Action
    incrementButton.click(); // Action
    incrementButton.click();// Action
    incrementButton.click();// Action
    const resultLabel = await screen.findByTestId('result');// Action
    expect(resultLabel).toHaveTextContent(3); // Assert
  });
  test('decrement counter from button - Min', async () => {
    const decrementButton = screen.getByTestId('decrement');
    decrementButton.click();
    const resultLabel = await screen.findByTestId('result');
    expect(resultLabel).toHaveTextContent(2);
  });
});
