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
    );
  });
  test('home page have content', () => {
    const counterLabel = screen.getByText('Counter');
    expect(counterLabel).toBeInTheDocument();
  });
  test('increment counter from button + Add', async () => {
    const incrementButton = screen.getByTestId('increment');
    incrementButton.click();
    const resultLabel = await screen.findByTestId('result');
    expect(resultLabel).toHaveTextContent(1);
  });
  test('decrement counter from button - Min', async () => {
    const decrementButton = screen.getByTestId('decrement');
    decrementButton.click();
    const resultLabel = await screen.findByTestId('result');
    expect(resultLabel).toHaveTextContent(0);
  });
});
