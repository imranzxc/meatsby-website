import Layout from '@/components/Layout';
import '../styles/globals.css';
import store from '../store/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = ({ Component }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component />
      </Layout>
    </Provider>
  );
};

export default App;
