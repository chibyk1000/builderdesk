

import PageLayout from './layouts/PageLayout';
import AboutPage from './pages/About';
import Home from './pages/Home';
import { Routes, Route, } from "react-router-dom";
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import PricingPage from './pages/Pricing';
import TermsPage from './pages/terms';
const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<PageLayout />} >
          <Route path='' element={<Home/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='services' element={<ServicesPage/>} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path='terms' element={<TermsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
