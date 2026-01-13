import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Markets from './pages/Markets';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import ContactThanks from './pages/ContactThanks';
import ContactAdmin from './pages/ContactAdmin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfUse from './pages/TermsOfUse';
import Accessibility from './pages/Accessibility';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-thanks" element={<ContactThanks />} />
          <Route path="/contact-admin" element={<ContactAdmin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
