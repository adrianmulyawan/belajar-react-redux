import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.page';
import ContactPage from './pages/Contact/contact.page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
