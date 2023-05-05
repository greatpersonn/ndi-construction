import { BrowserRouter } from 'react-router-dom';

import Header from './components/pages/Header';
import Main from './components/pages/Main';
import Footer from './components/pages/Footer';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
