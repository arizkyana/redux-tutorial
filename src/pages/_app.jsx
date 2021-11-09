import { Provider } from 'react-redux';
import store from '@/redux/store';

import '../styles/globals.css'; // tailwind
import '../styles/app.css'; // custom css -> menambahkan font

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
