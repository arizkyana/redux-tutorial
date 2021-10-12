import { Provider } from 'react-redux'; // context component
import store from '@/redux/store'; // path alias

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
